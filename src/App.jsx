import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/layout/ProtectedRoute';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MvpDevelopmentPage from './pages/MvpDevelopmentPage';
import AgentAutomationPage from './pages/AgentAutomationPage';
import CustomDevelopmentPage from './pages/CustomDevelopmentPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin Pages
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminCaseStudiesPage from './pages/admin/AdminCaseStudiesPage';
import AdminTestimonialsPage from './pages/admin/AdminTestimonialsPage';
import AdminFaqsPage from './pages/admin/AdminFaqsPage';

// Public Layout Wrapper
function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutPage />
            </PublicLayout>
          }
        />
        <Route
          path="/mvp-development"
          element={
            <PublicLayout>
              <MvpDevelopmentPage />
            </PublicLayout>
          }
        />
        <Route
          path="/agent-automation"
          element={
            <PublicLayout>
              <AgentAutomationPage />
            </PublicLayout>
          }
        />
        <Route
          path="/custom-development"
          element={
            <PublicLayout>
              <CustomDevelopmentPage />
            </PublicLayout>
          }
        />
        <Route
          path="/case-study/:id"
          element={
            <PublicLayout>
              <CaseStudyDetailPage />
            </PublicLayout>
          }
        />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboardPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/case-studies"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminCaseStudiesPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/testimonials"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminTestimonialsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/faqs"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminFaqsPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboardPage />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* 404 Catch-All */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFoundPage />
            </PublicLayout>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

