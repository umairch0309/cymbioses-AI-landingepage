import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "@components/auth/LoginForm";
import SignupPage from "@pages/auth/Signup";
import Dashboard from "@pages/dashboard";
import GetStartedPage from "@pages/getStarted";
import ClientsPage from "@/pages/clients";
import ClientDetailPage from "@pages/clients/ClientDetail";
import ClientSessionPage from "@pages/clients/ClientSessionDetail";
import AccountPage from "@pages/account/AcountPage";
import PurchaseNotePackages from "@pages/purchaseNotes/PurchaseNotePackages";
import AddSessionPage from "@pages/sessions/AddSession";
import SessionsPage from "@pages/sessions/SessionsPage";
import PublicLayout from "@/components/layouts/PublicLayout";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import HomePage from "@pages/home";
import OurStory from "@pages/OurStory";
import LandingLayout from "@components/layouts/LandingLayout";
import JoinCommunity from "@pages/community/JoinCommunity";
import CommunityList from "@pages/community/CommunityList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/join-community" element={<JoinCommunity />} />
      </Route>
      <Route path="/login" element={<PublicLayout />}>
        <Route index element={<LoginForm />} />
      </Route>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<PrivateLayout />}>
        <Route path="/get-started" element={<Dashboard />} />
        <Route path="/community" element={<CommunityList />} />
        <Route path="/dashboard" element={<GetStartedPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/:id" element={<ClientDetailPage />} />
        <Route path="/clients/session/:id" element={<ClientSessionPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/pricing" element={<PurchaseNotePackages />} />
        <Route path="/session/add" element={<AddSessionPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
