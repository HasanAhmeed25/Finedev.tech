import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e1224] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Legal Information
            </span>
            <h3 className="text-2xl font-bold text-white font-display">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
        </div>

        <div className="prose prose-invert prose-sm text-slate-300 space-y-4 font-light text-xs sm:text-sm leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>Effective Date:</strong> {new Date().getFullYear()} | FineDev.tech
              </p>
              <h4 className="text-white font-semibold pt-2">1. Information Collection</h4>
              <p>
                FineDev.tech collects contact details (such as your name, email address, company name,
                and project requirements) solely when you voluntarily submit an inquiry through our
                consultancy portal.
              </p>
              <h4 className="text-white font-semibold pt-2">2. Use of Information</h4>
              <p>
                We use collected information exclusively to communicate regarding your technical
                requirements, generate feasibility assessments, and provide software engineering
                consulting services. We do not sell, rent, or trade your data to third-party marketers.
              </p>
              <h4 className="text-white font-semibold pt-2">3. Data Security & Confidentiality</h4>
              <p>
                All technical disclosures and communications are treated with strict confidentiality.
                Standard mutual NDA agreements are available upon request prior to detailed code or
                proprietary workflow review.
              </p>
              <h4 className="text-white font-semibold pt-2">4. Direct Contact</h4>
              <p>
                For questions regarding data privacy or to request removal of your inquiry records,
                contact us at <code>contact@finedev.tech</code>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> {new Date().getFullYear()} | FineDev.tech
              </p>
              <h4 className="text-white font-semibold pt-2">1. Engagement Terms</h4>
              <p>
                FineDev.tech provides software engineering, technical consultancy, and digital product
                design services under milestone-governed Statements of Work (SOW).
              </p>
              <h4 className="text-white font-semibold pt-2">2. Intellectual Property</h4>
              <p>
                Unless explicitly agreed otherwise in a signed Master Services Agreement, all custom
                code, designs, and deliverables produced under completed milestone engagements become
                the full intellectual property of the client upon final settlement.
              </p>
              <h4 className="text-white font-semibold pt-2">3. Warranty & Code Handover</h4>
              <p>
                All delivered codebases include agreed post-launch stability windows, complete source
                code repositories, documentation, and agreed support frameworks.
              </p>
              <h4 className="text-white font-semibold pt-2">4. Inquiries & Governance</h4>
              <p>
                For technical consulting agreements and terms clarifications, contact{' '}
                <code>contact@finedev.tech</code>.
              </p>
            </>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
