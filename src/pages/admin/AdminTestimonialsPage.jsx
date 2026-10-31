import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Plus,
  Trash2,
  Star,
  X,
  CheckCircle,
  MessageSquare,
} from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function AdminTestimonialsPage() {
  useDocumentTitle('Testimonials Management | Admin Portal', 'Manage testimonials.');
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    content: '',
    rating: 5,
  });

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter((t) => t.id !== id));
      setMessage('Testimonial removed from current session view.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.content) {
      alert('Please provide client name and testimonial content.');
      return;
    }

    const newTestimonial = {
      id: `test-${Date.now()}`,
      name: formData.name,
      company: formData.company || 'Enterprise Partner',
      role: formData.role || 'Executive',
      content: formData.content,
      rating: Number(formData.rating) || 5,
      avatar: '/assets/client-avatar-1.svg',
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setIsModalOpen(false);
    setFormData({
      name: '',
      company: '',
      role: '',
      content: '',
      rating: 5,
    });
    setMessage('New testimonial added to current session view!');
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
              Testimonials Management
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Review, add, and organize client endorsements ({testimonials.length} reviews)
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-bold rounded-xl text-white bg-black hover:bg-gray-800 transition-colors shadow-sm self-start sm:self-auto"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Testimonial
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
                    Client
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Role & Company
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Content
                  </th>
                  <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {testimonials.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div>{item.role}</div>
                      <div className="text-xs text-gray-400">{item.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center text-black">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current text-black" />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 max-w-sm truncate">
                      "{item.content}"
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

        {/* Modal for adding a Testimonial */}
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
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Add Testimonial</h3>
                  <p className="text-xs text-gray-500">In-memory review demonstration</p>
                </div>
              </div>

              <form onSubmit={handleCreateSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Rajesh Sharma"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Role / Designation
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="e.g., VP of Engineering"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g., CloudScale Labs"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Rating (1-5 Stars)
                  </label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  >
                    <option value={5}>5 Stars - Outstanding</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Testimonial Content *
                  </label>
                  <textarea
                    name="content"
                    rows="3"
                    required
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Luxonixstacks delivered extraordinary technical precision..."
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
                    Save Testimonial
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
