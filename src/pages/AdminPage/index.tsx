import React, { FC } from "react";
import AdminLayout from "components/layouts/AdminLayout";
import OwnerForm from "components/content/OwnerForm";

/**
 * @description Страница админки
 */
const AdminPage: FC = () => {
  return <AdminLayout content={<OwnerForm />} />;
};

export default AdminPage;
