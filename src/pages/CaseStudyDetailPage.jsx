import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Check,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';
import { caseStudiesDetailData } from '../data/caseStudies';
import FallbackImage from '../components/common/FallbackImage';
import useDocumentTitle from '../hooks/useDocumentTitle';
import companyConfig from '../config/company';

export default function CaseStudyDetailPage() {
  const { id } = useParams();
  const caseStudy = id ? caseStudiesDetailData[id] : null;

  useDocumentTitle(
    caseStudy ? `${caseStudy.title} | Case Study` : 'Case Study Details',
    caseStudy
      ? `${caseStudy.overview.slice(0, 155)}...`
      : 'Explore comprehensive case studies and engineering success stories by Luxonixstacks.'
  );

  if (!caseStudy) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-6 max-w-lg mx-auto">
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Layers className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The case study you are looking for does not exist or may have been relocated.
          </p>
          <Link
            to="/#case-studies"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-colors shadow-md"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-gray-50 py-16 md:py-20 border-b border-gray-200/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link
            to="/#case-studies"
            className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-black mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                  {caseStudy.category}
                </span>
                <div className="flex items-center text-sm text-gray-600 font-medium bg-white px-3 py-1 rounded-full border border-gray-200">
                  <Clock className="h-4 w-4 mr-1.5 text-gray-500" />
                  <span>{caseStudy.timeline}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                {caseStudy.title}
              </h1>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block mb-1">
                  Client Organization
                </span>
                <p className="text-xl font-bold text-gray-800">{caseStudy.client}</p>
              </div>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                {caseStudy.overview}
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                <FallbackImage
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                  fallbackText={caseStudy.client}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY RESULTS METRICS */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Key Results & Deliverables
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200/70 hover:border-black transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-black text-black mb-2 group-hover:scale-105 transition-transform">
                  {metric.value}
                </div>
                <div className="text-base font-bold text-gray-800 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHALLENGE & SOLUTION */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200/80">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 mb-4">
                Initial Problem
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200/80">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-black text-white mb-4">
                Modern Architecture
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES DELIVERED & TECH STACK */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features list */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Key Features Delivered
              </h3>
              <div className="space-y-4">
                {caseStudy.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3.5">
                    <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Technology Stack Used
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200/70 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-900 font-bold text-sm block">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT RESULTS */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Measurable Project Outcomes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.results.map((res, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/80 flex items-start space-x-4"
              >
                <CheckCircle2 className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                  {res}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIAL */}
      {caseStudy.testimonial && caseStudy.testimonial.quote && (
        <section className="py-16 md:py-20 bg-white border-b border-gray-200/60">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-200/80">
              <blockquote className="text-lg md:text-2xl text-gray-800 mb-8 italic leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <FallbackImage
                  src={caseStudy.testimonial.image}
                  alt={caseStudy.testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  fallbackText={caseStudy.testimonial.author}
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-base">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {caseStudy.testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. BOTTOM CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your business with innovative, reliable technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/#case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              View More Case Studies
            </Link>
          </div>

          <p className="mt-12 text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
            Note: All project deliverables, technology modernization metrics, and quotes are showcased for architectural evaluation and client demonstration.
          </p>
        </div>
      </section>
    </div>
  );
}
