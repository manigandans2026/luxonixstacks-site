import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Plus,
  Trash2,
  X,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { faqsData } from '../../data/faqs';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function AdminFaqsPage() {
  useDocumentTitle('FAQs Management | Admin Portal', 'Manage FAQs.');
  const [faqs, setFaqs] = useState(faqsData);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: 'General',
    question: '',
    answer: '',
  });

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      setFaqs(faqs.filter((f) => f.id !== id));
      setMessage('FAQ removed from current session view.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.question || !formData.answer) {
      alert('Please provide both question and answer.');
      return;
    }

    const newFaq = {
      id: `faq-${Date.now()}`,
      category: formData.category,
      question: formData.question,
      answer: formData.answer,
    };

    setFaqs([newFaq, ...faqs]);
    setIsModalOpen(false);
    setFormData({
      category: 'General',
      question: '',
      answer: '',
    });
    setMessage('New FAQ added to current session view!');
    setTimeout(() => setMessage(''), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-0">
        <Link
          to="/admin"
          className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-black mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              FAQs Management
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Review, add, and organize frequently asked questions ({faqs.length} total)
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-bold rounded-xl text-white bg-black hover:bg-gray-800 transition-colors shadow-sm self-start sm:self-auto"
          >
            <Plus className="h-4 w-4 mr-2" /> Add FAQ
          </button>
        </div>

        {message && (
          <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-800 border border-green-200 flex items-center space-x-2 text-sm font-medium">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span>{message}</span>
          </div>
        )}

        <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Question
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Answer
                  </th>
                  <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {faqs.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 max-w-xs">
                      {item.question}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                      {item.answer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete from session"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for adding an FAQ */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Add New FAQ</h3>
                  <p className="text-xs text-gray-500">In-memory FAQ item demonstration</p>
                </div>
              </div>

              <form onSubmit={handleCreateSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  >
                    <option value="General">General</option>
                    <option value="MVP Development">MVP Development</option>
                    <option value="Agent & Automation">Agent & Automation</option>
                    <option value="DevOps & Custom">DevOps & Custom</option>
                    <option value="Engagement">Engagement & Pricing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Question *
                  </label>
                  <input
                    type="text"
                    name="question"
                    required
                    value={formData.question}
                    onChange={handleInputChange}
                    placeholder="e.g., What intellectual property rights do clients retain?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Answer *
                  </label>
                  <textarea
                    name="answer"
                    rows="4"
                    required
                    value={formData.answer}
                    onChange={handleInputChange}
                    placeholder="Provide clear, concise explanation..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="pt-4 flex justify-end space-x-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
                  >
                    Save FAQ
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
