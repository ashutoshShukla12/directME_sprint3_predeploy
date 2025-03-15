import React from "react";

import ProfilePage from "@/components/Profile/ProfilePage";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navigation from "@/components/shared/Navigation";

const Profile = () => {
  return (
    <ProtectedRoute>
      <div>
        <Navigation />
        <ProfilePage />
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
