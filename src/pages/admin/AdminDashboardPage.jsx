import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MessageSquare, HelpCircle, Layers, Plus, ExternalLink } from 'lucide-react';
import { caseStudiesList } from '../../data/caseStudies';
import { testimonialsData } from '../../data/testimonials';
import { faqsData } from '../../data/faqs';
import { servicesList } from '../../data/services';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function AdminDashboardPage() {
  useDocumentTitle('Dashboard | Admin Portal', 'Control center overview.');
  const cards = [
    {
      title: 'Case Studies',
      description: 'Manage project case studies',
      icon: Briefcase,
      link: '/admin/case-studies',
      count: caseStudiesList.length,
      color: 'bg-purple-500',
    },
    {
      title: 'Testimonials',
      description: 'Manage client testimonials',
      icon: MessageSquare,
      link: '/admin/testimonials',
      count: testimonialsData.length,
      color: 'bg-orange-500',
    },
    {
      title: 'FAQs',
      description: 'Manage frequently asked questions',
      icon: HelpCircle,
      link: '/admin/faqs',
      count: faqsData.length,
      color: 'bg-pink-500',
    },
    {
      title: 'Services',
      description: 'Active service offerings',
      icon: Layers,
      link: '/#services',
      count: servicesList.length,
      color: 'bg-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your website content and client showcases</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {cards.map((c) => (
            <div key={c.title} className="bg-white overflow-hidden shadow rounded-lg p-5">
              <div className="flex items-center">
                <div className={`p-3 rounded-md text-white ${c.color}`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <dt className="text-sm font-medium text-gray-500 truncate">{c.title}</dt>
                  <dd className="text-2xl font-bold text-gray-900">{c.count}</dd>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-md text-white ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admin/case-studies"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Case Study
            </Link>
            <Link
              to="/admin/testimonials"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Testimonial
            </Link>
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <ExternalLink className="h-4 w-4 mr-2" /> View Public Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

