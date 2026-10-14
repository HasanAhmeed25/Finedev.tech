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

      setSubmissionResult(data);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#285FE8', '#4F80F0', '#172033', '#8BA8FF'],
      });

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
    <section id="contact" className="relative py-24 sm:py-32 scroll-mt-24 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 text-left">
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border-color)] text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                INITIATE A PROJECT
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
                Let’s build <br />
                <span className="text-[var(--accent-primary)]">
                  something meaningful.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
                Tell us what you want to create. We’ll help you turn your requirements into a practical
                digital solution.
              </p>

              {/* Direct Inquiries & Confidentiality */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xs">
                  <div className="p-2 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                      Direct Email Inquiry
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors font-mono"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xs">
                  <div className="p-2 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary)] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                      Engineering Confidentiality
                    </span>
                    <p className="text-xs text-[var(--text-secondary)] font-light mt-0.5">
                      All requirements and IP are protected under standard mutual non-disclosure terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-3">
                Connect With FineDev.tech
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND_INFO.contactChannels.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 transition-all"
                  aria-label="GitHub organization"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={BRAND_INFO.contactChannels.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 transition-all"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={BRAND_INFO.contactChannels.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 transition-all font-mono text-sm px-3 flex items-center"
                  aria-label="X (formerly Twitter)"
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card relative">
              {/* Submission Success State */}
              {submissionResult ? (
                <div className="py-8 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-primary)] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-2">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    {submissionResult.message}
                  </p>

                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] max-w-sm mx-auto mb-8 font-mono text-xs text-left">
                    <div className="flex justify-between text-[var(--text-secondary)] pb-1.5 border-b border-[var(--border-color)]">
                      <span>Reference ID:</span>
                      <span className="text-[var(--accent-primary)] font-bold">{submissionResult.referenceId}</span>
                    </div>
                    <div className="flex justify-between text-[var(--text-secondary)] pt-1.5">
                      <span>Timestamp:</span>
                      <span className="text-[var(--text-primary)]">
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
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Error Banner */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Submission Notice</p>
                        <p className="text-xs mt-0.5">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2 font-medium">
                        Full Name <span className="text-[var(--accent-primary)]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        aria-required="true"
                        aria-invalid={!!formErrors.name}
                        className={`w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-all ${
                          formErrors.name
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                            : 'border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-xs text-red-500 mt-1.5">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2 font-medium">
                        Email Address <span className="text-[var(--accent-primary)]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        aria-required="true"
                        aria-invalid={!!formErrors.email}
                        className={`w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-all ${
                          formErrors.email
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                            : 'border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-500 mt-1.5">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2 font-medium">
                        Company or Organization <span className="text-[var(--text-muted)]">(Optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Technologies"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2 font-medium">
                        Estimated Budget <span className="text-[var(--text-muted)]">(Optional)</span>
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all"
                      >
                        <option value="">Select an investment tier...</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2 font-medium">
                      Project Type <span className="text-[var(--accent-primary)]">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2 font-medium">
                      Project Description <span className="text-[var(--accent-primary)]">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your project vision, target timeline, key features, or operational objectives..."
                      aria-required="true"
                      aria-invalid={!!formErrors.description}
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-all ${
                        formErrors.description
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20'
                      }`}
                    />
                    {formErrors.description && (
                      <p className="text-xs text-red-500 mt-1.5">{formErrors.description}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] transition-all duration-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Discuss Your Project</span>
                          <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-[11px] text-[var(--text-muted)] text-center leading-relaxed font-light">
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
