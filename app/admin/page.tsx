import { isAuthed } from "@/lib/auth";
import { getAllPhotos } from "@/lib/gallery";
import AdminLogin from "./AdminLogin";
import AdminGallery from "./AdminGallery";

export const dynamic = "force-dynamic";
export const metadata = { title: "Gallery admin", robots: { index: false, follow: false } };

export default async function AdminPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {!(await isAuthed()) ? (
        <AdminLogin configured={Boolean(process.env.ADMIN_PASSWORD)} />
      ) : (
        <AdminGallery initialPhotos={await getAllPhotos()} />
      )}
    </div>
  );
}
