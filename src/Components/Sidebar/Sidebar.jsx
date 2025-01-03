import React from 'react'
import style from "./Sidebar.module.css"
export default function Sidebar() {
  return (
<>
{/* الشريط الجانبي */}
<aside className="md:block w-1/6 bg-teal-900 text-white p-4 hidden ">
          <nav>
            <ul className="space-y-4">
              <li className="font-bold">إعدادات المتجر</li>
              <li>الطلبات</li>
              <li>المنتجات</li>
              <li>الخدمات</li>
            </ul>
          </nav>
        </aside>

</>  )
}
