import React, { useState, useEffect } from 'react';
import { PROJECT_TYPES, BUDGET_RANGES, BRAND_INFO } from '../../data/content';
import { InquiryFormData, InquirySubmissionResponse } from '../../types';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, ShieldCheck, RefreshCw } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Website Development',
    budget: '',
    description: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<InquirySubmissionResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialProjectType) {
      // Map service name if similar
      const matched = PROJECT_TYPES.find(
        (p) => p.toLowerCase().includes(initialProjectType.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, projectType: matched }));
      }
    }
  }, [initialProjectType]);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please provide a valid email format (e.g. name@domain.com).';
      }
    }

    if (!formData.projectType) {
      errors.projectType = 'Please select a project type.';
    }

    if (!formData.description.trim()) {
      errors.description = 'Please provide a short description of your project requirements.';
    } else if (formData.description.trim().length < 10) {
      errors.description = 'Please provide at least 10 characters describing your idea or requirements.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit project inquiry to backend.');
      }

      // Successful verified submission
      setSubmissionResult(data);

      // Trigger refined celebratory confetti
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#06b6d4', '#c084fc', '#38bdf8'],
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Website Development',
        budget: '',
        description: '',
      });
      setFormErrors({});
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      setErrorMessage(
        err.message ||
          'Connection to the inquiry endpoint could not be established. Please retry or contact us directly at contact@finedev.tech.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 scroll-mt-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121626] border border-white/10 text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                INITIATE A PROJECT
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                Have an Idea? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Let’s Build It.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                Tell us what you want to create. We’ll help you turn your requirements into a practical
                digital solution.
              </p>

              {/* Direct Inquiries & Confidentiality */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0e1222]/80 border border-white/5">
                  <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Direct Email Inquiry
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0e1222]/80 border border-white/5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Engineering Confidentiality
                    </span>
                    <p className="text-xs text-slate-300 font-light mt-0.5">
                      All requirements and IP are protected under standard mutual non-disclosure terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Connect With FineDev.tech
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND_INFO.contactChannels.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#12162a] border border-white/10 text-slate-300 hover:text-white hover:border-purple-400 transition-all"
                  aria-label="GitHub organization"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={BRAND_INFO.contactChannels.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#12162a] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={BRAND_INFO.contactChannels.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#12162a] border border-white/10 text-slate-300 hover:text-white hover:border-purple-400 transition-all font-mono text-sm px-3 flex items-center"
                  aria-label="X (formerly Twitter)"
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1224]/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative">
              {/* Submission Success State */}
              {submissionResult ? (
                <div className="py-8 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mx-auto mb-5 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display mb-2">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    {submissionResult.message}
                  </p>

                  <div className="p-4 rounded-xl bg-[#080b16] border border-white/10 max-w-sm mx-auto mb-8 font-mono text-xs text-left">
                    <div className="flex justify-between text-slate-400 pb-1.5 border-b border-white/5">
                      <span>Reference ID:</span>
                      <span className="text-cyan-300 font-bold">{submissionResult.referenceId}</span>
                    </div>
                    <div className="flex justify-between text-slate-400 pt-1.5">
                      <span>Timestamp:</span>
                      <span className="text-slate-300">
                        {submissionResult.submittedAt
                          ? new Date(submissionResult.submittedAt).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : 'Just now'}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmissionResult(null)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Error Banner */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Submission Notice</p>
                        <p className="text-xs text-red-300 mt-0.5">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Full Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        aria-required="true"
                        aria-invalid={!!formErrors.name}
                        className={`w-full px-4 py-3 rounded-xl bg-[#090c18] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          formErrors.name
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-xs text-red-400 mt-1.5">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        aria-required="true"
                        aria-invalid={!!formErrors.email}
                        className={`w-full px-4 py-3 rounded-xl bg-[#090c18] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          formErrors.email
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-400 mt-1.5">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Company or Organization <span className="text-slate-400">(Optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Technologies"
                        className="w-full px-4 py-3 rounded-xl bg-[#090c18] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Estimated Budget <span className="text-slate-400">(Optional)</span>
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090c18] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      >
                        <option value="">Select an investment tier...</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b} className="bg-[#090c18] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Project Type <span className="text-purple-400">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-xl bg-[#090c18] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-[#090c18] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Project Description <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your project vision, target timeline, key features, or operational objectives..."
                      aria-required="true"
                      aria-invalid={!!formErrors.description}
                      className={`w-full px-4 py-3 rounded-xl bg-[#090c18] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        formErrors.description
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {formErrors.description && (
                      <p className="text-xs text-red-400 mt-1.5">{formErrors.description}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Connecting & Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Discuss Your Project</span>
                          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-[11px] text-slate-400 text-center leading-relaxed font-light">
                    We value your confidentiality. Your contact information is used strictly to discuss
                    your project requirements and is never sold or shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
