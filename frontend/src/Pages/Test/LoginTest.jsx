import { User, Mail, KeyIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function LoginTest() {
  const location = useLocation();
  const email = location.state?.email || 'NONE';
  const pageType = location.state?.pageType || 'NONE';

  const [profile] = useState({
    name: 'Anas Odeh',
    title: 'Programmer',
    company: 'Xamx.Ai',
    email: email,
    pageType: pageType,
    location: 'New York, USA',
    bio: 'Passionate about building intuitive products and refining user experiences with clean, accessible interfaces.',
  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
        <div className="bg-linear-to-r from-black to-black/90 px-8 py-10 text-white">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center  bg-white/15">
              <User className="h-10 w-10" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-100/80">Profile</p>
              <h1 className="mt-2 text-3xl font-semibold">{profile.name}</h1>
              <p className="mt-1 text-sm text-slate-100/80">{profile.title} · {profile.company}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-8 py-8 sm:px-10">
          <div className=" bg-slate-50 p-6 shadow-sm shadow-slate-200/70">
            <h2 className="text-xl font-semibold text-slate-900">About</h2>
            <p className="mt-3 text-slate-600">{profile.bio}</p>
          </div>

          <div className="gap-4 flex flex-wrap">
            <div className=" border border-slate-200 bg-white p-6 shadow-sm w-full">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5" />
                <h3 className="text-sm font-semibold text-slate-900">Email</h3>
              </div>
              <p className="mt-4 text-slate-700">{profile.email}</p>
            </div>

            <div className=" border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 w-full">
              <div className="flex items-center gap-3 text-gray-600">
                <KeyIcon className="h-5 w-5" />
                <h3 className="text-sm font-semibold text-slate-900">pageType</h3>
              </div>
              <p className="mt-4 text-slate-700">{profile.pageType}</p>
            </div>
          </div>

          <div className="flex items-center justify-between  border border-slate-200 bg-slate-50 p-6">
            <div>
              <p className="text-sm text-slate-500">Status</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Active</p>
            </div>
            <button className=" bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/90 cursor-pointer">
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
