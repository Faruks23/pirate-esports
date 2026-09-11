import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { CONTACT_CATEGORIES, TEAM_INFO } from '../data/esportsData';
import { Send, CheckCircle2, Mail, MapPin, MessageSquare, Clock, Sparkles, Copy, Check } from 'lucide-react';

export interface ContactFormHandle {
  setCategory: (category: (typeof CONTACT_CATEGORIES)[number]) => void;
  setMessage: (message: string) => void;
  focusForm: () => void;
}

export const ContactForm = forwardRef<ContactFormHandle>((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: CONTACT_CATEGORIES[1], // Default to SPONSORSHIP
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    setCategory: (cat) => {
      setFormData((prev) => ({ ...prev, inquiryType: cat }));
    },
    setMessage: (msg) => {
      setFormData((prev) => ({ ...prev, message: msg }));
    },
    focusForm: () => {
      const el = document.getElementById('contact-name-input');
      if (el) el.focus();
    },
  }));

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const getCategoryHint = (cat: string) => {
    switch (cat) {
      case 'SPONSORSHIP':
        return 'Commercial deck requests, jersey placement, and co-branded team sponsorships.';
      case 'PARTNERSHIPS':
        return 'Brand activations, boot camp alliances, Discord community collabs, and event co-hosting.';
      case 'MEDIA':
        return 'Press interviews, high-resolution media asset kits, and official tournament coverage.';
      default:
        return 'General inquiries, team queries, recruitment notes, and fan outreach.';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate professional client demo submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      inquiryType: CONTACT_CATEGORIES[1],
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070709] border-t border-zinc-900">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Organization Info & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-2">
                <MessageSquare className="w-4 h-4" />
                GET IN TOUCH
              </div>

              <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
                LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">TALK</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                Whether you represent an esports brand seeking sponsorship, a tournament organizer, media outlet, or commercial partner, our executive team is ready to connect.
              </p>

              {/* Direct Info Blocks */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#0d0e14] border border-zinc-800 flex items-start justify-between gap-4 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-950/80 border border-red-800/60 flex items-center justify-center text-red-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
                        SPONSORSHIP & PARTNERSHIPS
                      </span>
                      <span className="font-heading text-base font-bold text-white tracking-wide block">
                        {TEAM_INFO.businessEmail}
                      </span>
                      <span className="text-xs text-zinc-400 block mt-0.5">
                        Proposal inquiries & deck requests
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyEmail(TEAM_INFO.businessEmail)}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail === TEAM_INFO.businessEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#0d0e14] border border-zinc-800 flex items-start justify-between gap-4 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-950/80 border border-orange-800/60 flex items-center justify-center text-orange-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
                        MANAGEMENT & MEDIA
                      </span>
                      <span className="font-heading text-base font-bold text-white tracking-wide block">
                        {TEAM_INFO.officialEmail}
                      </span>
                      <span className="text-xs text-zinc-400 block mt-0.5">
                        General press, interviews & tournament ops
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyEmail(TEAM_INFO.officialEmail)}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail === TEAM_INFO.officialEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#0d0e14] border border-zinc-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
                      LOCATION
                    </span>
                    <span className="font-heading text-base font-bold text-white tracking-wide">
                      Dhaka, Bangladesh
                    </span>
                    <span className="text-xs text-zinc-400 block mt-0.5">
                      Headquarters & Bootcamp Center
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-zinc-950/80 border border-zinc-800 flex items-center gap-3 text-xs text-zinc-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Typical business response time within 24–48 hours</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c0d12] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              {isSubmitted ? (
                /* Success State */
                <div className="py-8 text-center flex flex-col items-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/80 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-heading text-3xl font-black text-white uppercase tracking-tight mb-2">
                    MESSAGE RECEIVED
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{submittedData?.name}</strong>. Your inquiry regarding{' '}
                    <span className="text-red-400 font-bold uppercase">{submittedData?.inquiryType}</span> has been logged into our executive intake system.
                  </p>

                  <div className="w-full p-4 rounded-xl bg-black/60 border border-zinc-800 text-left mb-8 max-w-md">
                    <div className="text-xs text-zinc-400 space-y-1.5">
                      <div><strong className="text-zinc-300">Name:</strong> {submittedData?.name}</div>
                      <div><strong className="text-zinc-300">Email:</strong> {submittedData?.email}</div>
                      {submittedData?.company && (
                        <div><strong className="text-zinc-300">Company / Brand:</strong> {submittedData?.company}</div>
                      )}
                      <div><strong className="text-zinc-300">Category:</strong> {submittedData?.inquiryType}</div>
                      <div className="pt-2 border-t border-zinc-800"><strong className="text-zinc-300">Message:</strong> {submittedData?.message}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-heading text-xs font-bold uppercase tracking-wider rounded transition-colors clip-angled-button"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                /* Form Interactive State */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection Tabs */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                      INQUIRY CATEGORY <span className="text-red-500">*</span>
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                      {CONTACT_CATEGORIES.map((cat) => {
                        const isSelected = formData.inquiryType === cat;
                        return (
                          <button
                            type="button"
                            key={cat}
                            onClick={() => setFormData({ ...formData, inquiryType: cat })}
                            className={`py-2.5 px-2 text-[11px] font-bold tracking-wider uppercase rounded text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-red-600 text-white border border-red-500 shadow-md shadow-red-950/50'
                                : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800'
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>

                    <p className="text-[11px] text-zinc-500 italic">
                      {getCategoryHint(formData.inquiryType)}
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name-input"
                        className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2"
                      >
                        YOUR NAME <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Shakib Ahmed"
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="contact-email-input"
                          className="block text-xs font-bold uppercase tracking-widest text-zinc-400"
                        >
                          EMAIL ADDRESS <span className="text-red-500">*</span>
                        </label>
                        {formData.email && (
                          <span className={`text-[10px] font-bold ${isEmailValid ? 'text-emerald-400' : 'text-zinc-500'}`}>
                            {isEmailValid ? '✓ Valid format' : 'Enter valid email'}
                          </span>
                        )}
                      </div>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@brand.com"
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label
                      htmlFor="contact-company-input"
                      className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2"
                    >
                      COMPANY / ORGANIZATION <span className="text-zinc-600 text-[10px]">(OPTIONAL)</span>
                    </label>
                    <input
                      id="contact-company-input"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Titan Gaming / Media Agency"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="contact-message-input"
                        className="block text-xs font-bold uppercase tracking-widest text-zinc-400"
                      >
                        MESSAGE <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[10px] text-zinc-500">
                        {formData.message.length}/1000 characters
                      </span>
                    </div>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      required
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand objectives, campaign timeline, or tournament inquiry..."
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="send-message-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 btn-premium-primary disabled:opacity-50 text-white font-heading text-sm font-bold tracking-widest uppercase clip-angled-button flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND INQUIRY</span>
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] text-zinc-500">
                      ⚡ Direct transmission to Pirate Esports Operations & Commercial Management
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = 'ContactForm';
