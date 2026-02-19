import { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useBetaModal } from "@/context/BetaModalContext";
import { useLanguage } from "@/i18n/LanguageContext";

const BetaModal = () => {
  const { isOpen, close, source } = useBetaModal();
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [betaCode, setBetaCode] = useState("");
  const [betaCodeError, setBetaCodeError] = useState("");

  if (!isOpen) return null;

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setEmailError(t("beta_error_email"));
      return;
    }
    if (!consent) {
      setEmailError(t("beta_error_consent"));
      return;
    }
    setEmailError("");
    setEmailLoading(true);
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert({ email: email.trim().toLowerCase(), source });
      if (error) throw error;
      setEmailSubmitted(true);
    } catch {
      setEmailError(t("beta_error_generic"));
    } finally {
      setEmailLoading(false);
    }
  };

  const VALID_BETA_CODE = "678910";

  const handleBetaCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!betaCode.trim()) return;
    if (betaCode.trim() !== VALID_BETA_CODE) {
      setBetaCodeError(t("beta_code_invalid"));
      return;
    }
    setBetaCodeError("");
    window.location.href = `https://app.fablino.eu/welcome?code=${encodeURIComponent(betaCode.trim())}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <div className="relative bg-card rounded-3xl shadow-2xl w-full max-w-2xl animate-scale-in">
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center pt-8 px-6 pb-4">
            <h2 className="text-2xl font-black text-foreground mb-2">
              {t("beta_title")}
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              {t("beta_subtitle")}
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-4 p-6 pt-3">
            {/* Left — Waitlist */}
            <div className="bg-fablino-orange-bg border border-primary/20 rounded-2xl p-5 flex flex-col">
              <p className="font-extrabold text-foreground text-base mb-1">{t("beta_waitlist_title")}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {t("beta_waitlist_subtitle")}
              </p>

              {emailSubmitted ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-center font-bold text-foreground text-base">
                    {t("beta_waitlist_success")}<br />
                    <span className="font-normal text-sm text-muted-foreground">{t("beta_waitlist_success_sub")}</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleWaitlist} className="flex flex-col gap-3 flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("beta_waitlist_placeholder")}
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  {emailError && (
                    <p className="text-xs text-destructive">{emailError}</p>
                  )}
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 shrink-0 accent-primary w-4 h-4 rounded"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {t("beta_consent")}
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={emailLoading || !consent}
                    className="mt-auto bg-primary text-primary-foreground font-bold text-sm py-2.5 rounded-full shadow-fablino-orange hover:shadow-fablino-orange-hover hover:scale-[1.02] transition-all disabled:opacity-60"
                  >
                    {emailLoading ? t("beta_waitlist_sending") : t("beta_waitlist_cta")}
                  </button>
                </form>
              )}
            </div>

            {/* Right — Beta code */}
            <div className="bg-muted/40 border border-border rounded-2xl p-5 flex flex-col">
              <p className="font-extrabold text-foreground text-base mb-1">{t("beta_code_title")}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {t("beta_code_subtitle")}
              </p>
              <form onSubmit={handleBetaCode} className="flex flex-col gap-3 flex-1">
                <input
                  type="text"
                  value={betaCode}
                  onChange={(e) => setBetaCode(e.target.value)}
                  placeholder={t("beta_code_placeholder")}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {betaCodeError && (
                  <p className="text-xs text-destructive">{betaCodeError}</p>
                )}
                <button
                  type="submit"
                  disabled={!betaCode.trim()}
                  className="mt-auto bg-card text-primary border-2 border-primary font-bold text-sm py-2.5 rounded-full hover:bg-fablino-orange-bg hover:scale-[1.02] transition-all disabled:opacity-40"
                >
                  {t("beta_code_cta")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetaModal;
