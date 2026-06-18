import AuthHeader from "../components/AuthLayout/AuthHeader"
import AuthFooter from "../components/AuthLayout/AuthFooter"

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-emerald-50">
      <AuthHeader />
      <main>{children}</main>
      <AuthFooter />
    </div>
  );
}
