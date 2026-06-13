import { isAuthed } from "@/lib/auth";
import { getAllPhotos } from "@/lib/gallery";
import AdminLogin from "./AdminLogin";
import AdminGallery from "./AdminGallery";

export const dynamic = "force-dynamic";
export const metadata = { title: "Gallery admin", robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!(await isAuthed())) {
    return <AdminLogin configured={Boolean(process.env.ADMIN_PASSWORD)} />;
  }
  const photos = await getAllPhotos();
  return <AdminGallery initialPhotos={photos} />;
}
