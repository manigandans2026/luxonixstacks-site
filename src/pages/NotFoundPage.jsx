import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFoundPage() {
  useDocumentTitle('404 Page Not Found', 'The requested page could not be located.');

  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-6 max-w-lg mx-auto">
        <div className="w-20 h-20 bg-black text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Compass className="h-10 w-10 animate-spin-slow" />
        </div>
        <span className="text-sm font-bold uppercase tracking-widest text-gray-500 block mb-2">
          Error 404
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition-colors shadow-md"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-800 font-bold hover:bg-gray-50 transition-colors"
          >
            About Luxonixstacks
          </Link>
        </div>
      </div>
    </div>
  );
}

