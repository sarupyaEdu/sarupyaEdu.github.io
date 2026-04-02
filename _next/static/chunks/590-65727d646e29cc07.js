"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [590],
  {
    3464: (e, t, a) => {
      a.d(t, { default: () => y });
      var r = a(5155),
        n = a(2115),
        i = a(9831),
        s = a(2096),
        o = a(5797),
        l = a(6497),
        c = a(9427),
        d = a(7494),
        m = a(4684),
        p = a(7333),
        u = a(5229),
        h = a(9540),
        x = a(2619),
        g = a.n(x),
        b = a(5239),
        f = a(6174);
      let v = [
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
      ];
      function y() {
        let [e, t] = (0, n.useState)(!1),
          [a, x] = (0, n.useState)(!1),
          { theme: y, toggleTheme: w, mounted: k } = (0, f.D)(),
          { scrollY: j } = (0, i.L)(),
          z = () => {
            (x(!0), w(), setTimeout(() => x(!1), 500));
          },
          C = (0, s.G)(j, [0, 100], [0, 1]),
          N = (0, s.G)(C, (e) =>
            "dark" === y
              ? "rgba(9, 9, 11, ".concat(0.8 * e, ")")
              : "rgba(255, 255, 255, ".concat(0.8 * e, ")"),
          ),
          A = (0, s.G)(C, (e) => "blur(".concat(12 * e, "px)")),
          P = (0, s.G)(C, (e) =>
            "dark" === y
              ? "rgba(39, 39, 42, ".concat(e, ")")
              : "rgba(228, 228, 231, ".concat(e, ")"),
          ),
          S = (0, s.G)(j, [0, 100], ["24px", "16px"]);
        return (
          (0, n.useEffect)(
            () => (
              e
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = ""),
              () => {
                document.body.style.overflow = "";
              }
            ),
            [e],
          ),
          (0, r.jsxs)(o.P.nav, {
            style: {
              backgroundColor: N,
              backdropFilter: A,
              borderBottom: "1px solid",
              borderBottomColor: P,
              paddingTop: S,
              paddingBottom: S,
            },
            className:
              "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "max-w-7xl mx-auto px-6 flex justify-between items-center",
                children: [
                  (0, r.jsxs)(o.P.div, {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    className: "flex items-center gap-4",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800",
                        children: (0, r.jsx)(b.default, {
                          src: "https://picsum.photos/seed/author-avatar/100/100",
                          alt: "Author Avatar",
                          fill: !0,
                          className: "object-cover",
                          referrerPolicy: "no-referrer",
                        }),
                      }),
                      (0, r.jsxs)(g(), {
                        href: "/",
                        className:
                          "text-2xl font-display font-bold tracking-tighter",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-zinc-900 dark:text-white",
                            children: "PORTFOLIO",
                          }),
                          (0, r.jsx)("span", {
                            className: "text-emerald-500",
                            children: ".",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [
                      v.map((e, t) =>
                        (0, r.jsx)(
                          o.P.div,
                          {
                            initial: { opacity: 0, y: -10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.1 * t },
                            children: (0, r.jsx)(g(), {
                              href: e.href,
                              className:
                                "text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors",
                              children: e.name,
                            }),
                          },
                          e.name,
                        ),
                      ),
                      (0, r.jsxs)(o.P.div, {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 0.4 },
                        className:
                          "flex items-center gap-4 ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-800",
                        children: [
                          (0, r.jsx)("button", {
                            onClick: z,
                            className:
                              "p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all ".concat(
                                a ? "animate-theme-pulse" : "",
                              ),
                            "aria-label": "Toggle Theme",
                            type: "button",
                            children: k
                              ? "dark" === y
                                ? (0, r.jsx)(c.A, { size: 18 })
                                : (0, r.jsx)(d.A, { size: 18 })
                              : (0, r.jsx)("div", {
                                  className: "w-[18px] h-[18px]",
                                }),
                          }),
                          (0, r.jsx)("a", {
                            href: "https://github.com/sarupyaEdu",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors",
                            children: (0, r.jsx)(m.A, { size: 18 }),
                          }),
                          (0, r.jsx)("a", {
                            href: "https://www.linkedin.com/in/sarupyadatta1440/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors",
                            children: (0, r.jsx)(p.A, { size: 18 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("button", {
                    className: "md:hidden text-zinc-900 dark:text-zinc-100",
                    onClick: () => t(!e),
                    "aria-label": "Toggle Menu",
                    type: "button",
                    children: e ? (0, r.jsx)(u.A, {}) : (0, r.jsx)(h.A, {}),
                  }),
                ],
              }),
              (0, r.jsx)(l.N, {
                children:
                  e &&
                  (0, r.jsx)(o.P.div, {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className:
                      "md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden",
                    children: (0, r.jsxs)("div", {
                      className: "flex flex-col p-6 gap-4",
                      children: [
                        v.map((e) =>
                          (0, r.jsx)(
                            g(),
                            {
                              href: e.href,
                              onClick: () => t(!1),
                              className:
                                "text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400",
                              children: e.name,
                            },
                            e.name,
                          ),
                        ),
                        (0, r.jsxs)("div", {
                          className:
                            "flex items-center gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800",
                          children: [
                            (0, r.jsxs)("button", {
                              onClick: z,
                              className:
                                "flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium",
                              type: "button",
                              children: [
                                k
                                  ? "dark" === y
                                    ? (0, r.jsx)(c.A, { size: 18 })
                                    : (0, r.jsx)(d.A, { size: 18 })
                                  : (0, r.jsx)("div", {
                                      className: "w-[18px] h-[18px]",
                                    }),
                                k
                                  ? "dark" === y
                                    ? "Light Mode"
                                    : "Dark Mode"
                                  : "Theme",
                              ],
                            }),
                            (0, r.jsx)("a", {
                              href: "https://github.com/sarupyaEdu",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors",
                              children: (0, r.jsx)(m.A, { size: 18 }),
                            }),
                            (0, r.jsx)("a", {
                              href: "https://www.linkedin.com/in/sarupyadatta1440/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors",
                              children: (0, r.jsx)(p.A, { size: 18 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              }),
            ],
          })
        );
      }
    },
    6174: (e, t, a) => {
      a.d(t, { D: () => o, ThemeProvider: () => s });
      var r = a(5155),
        n = a(2115);
      let i = (0, n.createContext)(void 0);
      function s(e) {
        let { children: t } = e,
          [a, s] = (0, n.useState)("dark"),
          [o, l] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          (s(
            window.document.documentElement.classList.contains("light")
              ? "light"
              : "dark",
          ),
            l(!0));
        }, []);
        let c = (e) => {
          let t = window.document.documentElement;
          (t.classList.remove("light", "dark"),
            t.classList.add(e),
            localStorage.setItem("theme", e),
            s(e));
        };
        return (0, r.jsx)(i.Provider, {
          value: {
            theme: a,
            toggleTheme: () => {
              c("dark" === a ? "light" : "dark");
            },
            mounted: o,
            setTheme: c,
          },
          children: t,
        });
      }
      function o() {
        let e = (0, n.useContext)(i);
        if (void 0 === e)
          throw Error("useTheme must be used within a ThemeProvider");
        return e;
      }
    },
    7336: (e, t, a) => {
      a.d(t, { A: () => D });
      var r = a(5155),
        n = a(2115),
        i = a(5797),
        s = a(6497),
        o = a(5239),
        l = a(5342),
        c = a(9068),
        d = a(4157),
        m = a(6154),
        p = a(4172),
        u = a(906),
        h = a(5710),
        x = a(8198),
        g = a(9332),
        b = a(6140),
        f = a(8150),
        v = a(8085),
        y = a(5625),
        w = a(6835),
        k = a(7828),
        j = a(8597),
        z = a(5707),
        C = a(5882),
        N = a(368),
        A = a(7937),
        P = a(5880),
        S = a(4684),
        E = a(5229),
        R = a(7125),
        F = a(6191),
        I = a(8314);
      let _ = [
          {
            title: "PC PartMart",
            description:
              "A full-stack e-commerce platform for computer parts with separate customer, admin, and backend systems.",
            image:
              "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Home_Page.png",
            tags: [
              "MERN",
              "React",
              "E-Commerce",
              "Full Stack",
              "UI/UX",
              "Tailwind CSS",
            ],
            parts: [
              {
                name: "Customer Frontend",
                hosting: "Vercel",
                description:
                  "Customer-facing e-commerce platform with product browsing, cart, wishlist, and secure checkout.",
                longDescription:
                  "Developed a responsive customer interface for browsing computer parts, managing cart and wishlist, and placing orders with Razorpay and COD integration. Includes product filtering, reviews, and dynamic UI interactions.",
                image:
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Home_Page.png",
                screenshots: [
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Login.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Register.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/User_Profile_Page.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/All_Products_Page.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Product_Details_Page.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Wishlists.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Cart.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Checkout.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Razorpay.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/User_Orders_Page.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/User_Order_Details_Page.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/Reviews.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/User_Support_Tickets.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Frontend-Customer-/main/Customer-Frontend-Site-Images/User_Support_Page.png",
                ],
                github:
                  "https://github.com/sarupyaEdu/PC-PartMart-Frontend-Customer-",
                demo: "https://pc-part-mart-frontend-customer.vercel.app/",
                skills: [
                  { name: "React", percentage: 90 },
                  { name: "Tailwind CSS", percentage: 95 },
                  { name: "API", percentage: 85 },
                  { name: "Razorpay", percentage: 80 },
                  { name: "UI/UX", percentage: 90 },
                  { name: "Axios", percentage: 85 },
                ],
              },
              {
                name: "Admin Frontend",
                hosting: "Vercel",
                description:
                  "Admin dashboard to manage products, orders, users, and offers.",
                longDescription:
                  "Built a complete admin panel for managing products, categories, brands, and orders. Includes CRUD operations, analytics, order status updates, and image uploads via Cloudinary.",
                image:
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Admin-Panel-/main/Admin-Front-End-Images/Dashboard.png",
                screenshots: [
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Admin-Panel-/main/Admin-Front-End-Images/Admin_Login.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Admin-Panel-/main/Admin-Front-End-Images/Category_CRUD.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Admin-Panel-/main/Admin-Front-End-Images/Brands_CRUD.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Admin-Panel-/main/Admin-Front-End-Images/Product_CRUD.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Admin-Panel-/main/Admin-Front-End-Images/Order_Management.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Admin-Panel-/main/Admin-Front-End-Images/Customer_Support.png",
                ],
                github:
                  "https://github.com/sarupyaEdu/PC-PartMart-Admin-Panel-",
                demo: "https://pc-part-mart-admin-panel.vercel.app/",
                skills: [
                  { name: "React", percentage: 90 },
                  { name: "Tailwind CSS", percentage: 90 },
                  { name: "Cloudinary", percentage: 88 },
                  { name: "UI/UX", percentage: 88 },
                  { name: "API", percentage: 90 },
                  { name: "Axios", percentage: 85 },
                ],
              },
              {
                name: "Backend",
                hosting: "Render",
                description:
                  "REST API backend handling authentication, orders, payments, and database operations.",
                longDescription:
                  "Designed and developed a scalable backend using Node.js and Express. Implemented JWT authentication, Razorpay integration, Cloudinary uploads, order management, and MongoDB schema design.",
                image:
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Backend-/main/Backend_Render_Image/Backend_Render_Dashboard.png",
                screenshots: [
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Backend-/main/Backend_Render_Image/Logs.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/PC-PartMart-Backend-/main/Backend_Render_Image/Api_Running.png",
                ],
                github: "https://github.com/sarupyaEdu/PC-PartMart-Backend-",
                skills: [
                  { name: "Node.js", percentage: 90 },
                  { name: "Express", percentage: 85 },
                  { name: "MongoDB", percentage: 90 },
                  { name: "Cloudinary", percentage: 85 },
                  { name: "Razorpay", percentage: 82 },
                  { name: "API", percentage: 92 },
                ],
              },
            ],
          },
          {
            title: "Royal Skin Aesthetics",
            description:
              "A modern, responsive website for a skin aesthetics clinic with service showcase, appointment booking, and smooth UI animations.",
            image:
              "https://raw.githubusercontent.com/sarupyaEdu/Royal-Skin-Aesthetics-Clone-With-Vite-React---TailwindCSS/main/Royal_Skin_Aesthetics/Home.png",
            tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
            parts: [
              {
                name: "Frontend",
                hosting: "Vercel",
                description:
                  "Responsive website showcasing services, treatments, and clinic information with smooth animations.",
                longDescription:
                  "Designed and developed a fully responsive UI for a skin clinic using React and Tailwind CSS. Implemented animated sections with Framer Motion, service pages, dropdown navigation, and mobile hamburger menu. Focused on clean UI/UX, fast performance, and modern design aesthetics.",
                image:
                  "https://raw.githubusercontent.com/sarupyaEdu/Royal-Skin-Aesthetics-Clone-With-Vite-React---TailwindCSS/main/Royal_Skin_Aesthetics/Home.png",
                screenshots: [
                  "https://raw.githubusercontent.com/sarupyaEdu/Royal-Skin-Aesthetics-Clone-With-Vite-React---TailwindCSS/main/Royal_Skin_Aesthetics/About.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/Royal-Skin-Aesthetics-Clone-With-Vite-React---TailwindCSS/main/Royal_Skin_Aesthetics/Services.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/Royal-Skin-Aesthetics-Clone-With-Vite-React---TailwindCSS/main/Royal_Skin_Aesthetics/Book.png",
                  "https://raw.githubusercontent.com/sarupyaEdu/Royal-Skin-Aesthetics-Clone-With-Vite-React---TailwindCSS/main/Royal_Skin_Aesthetics/Contact.png",
                ],
                github:
                  "https://github.com/sarupyaEdu/Royal-Skin-Aesthetics-Clone-With-Vite-React---TailwindCSS",
                demo: "https://royal-skin-aesthetics-clone-with-vi.vercel.app/",
                skills: [
                  { name: "React", percentage: 92 },
                  { name: "Tailwind CSS", percentage: 96 },
                  { name: "Framer Motion", percentage: 88 },
                  { name: "Vite", percentage: 90 },
                  { name: "UI/UX", percentage: 93 },
                  { name: "Responsive Design", percentage: 96 },
                  { name: "Component Architecture", percentage: 90 },
                ],
              },
            ],
          },
          {
            title: "E-Cart",
            description:
              "A responsive e-commerce frontend with product listing, product details, cart management, and improved mobile-friendly navigation.",
            image:
              "https://raw.githubusercontent.com/sarupyaEdu/E-Cart/main/E-Cart%20Images/Home.png",
            tags: [
              "React",
              "Responsive Design",
              "E-Commerce",
              "Frontend",
              "Navbar",
              "CSS",
            ],
            parts: [
              {
                name: "Frontend",
                hosting: "Vercel",
                description:
                  "Responsive e-commerce frontend with fixed navbars, product pages, cart page, and mobile-friendly layouts.",
                longDescription:
                  "Improved and refactored the E-Cart frontend to make it fully responsive across mobile, tablet, and desktop screens. Fixed navbar behavior, improved filter navigation for smaller devices, made product cards and detail sections responsive, enhanced cart layout usability, and added better empty-state handling.",
                image:
                  "https://raw.githubusercontent.com/sarupyaEdu/E-Cart/main/E-Cart%20Images/Home.png",
                screenshots: [],
                github: "https://github.com/sarupyaEdu/E-Cart/tree/main",
                demo: "https://e-shopppykart.vercel.app/",
                skills: [
                  { name: "React", percentage: 88 },
                  { name: "Responsive Design", percentage: 95 },
                  { name: "CSS", percentage: 90 },
                  { name: "Navbar Fixes", percentage: 92 },
                  { name: "UI/UX", percentage: 87 },
                  { name: "Component Layout", percentage: 89 },
                ],
              },
            ],
          },
        ],
        M = {
          React: { icon: l.A, color: "text-sky-500" },
          "Next.js": { icon: c.A, color: "text-zinc-800 dark:text-zinc-100" },
          "Tailwind CSS": { icon: d.A, color: "text-cyan-500" },
          "Framer Motion": { icon: m.A, color: "text-pink-500" },
          "Node.js": { icon: p.A, color: "text-green-600" },
          Express: { icon: u.A, color: "text-zinc-600 dark:text-zinc-400" },
          "Express.js": {
            icon: u.A,
            color: "text-zinc-600 dark:text-zinc-400",
          },
          PostgreSQL: { icon: h.A, color: "text-blue-600" },
          Firebase: { icon: x.A, color: "text-amber-500" },
          Git: { icon: g.A, color: "text-orange-600" },
          Docker: { icon: b.A, color: "text-blue-500" },
          "VS Code": { icon: f.A, color: "text-blue-600" },
          Postman: { icon: v.A, color: "text-orange-600" },
          Figma: { icon: y.A, color: "text-orange-600" },
          "Adobe XD": { icon: w.A, color: "text-pink-500" },
          "UI Principles": { icon: k.A, color: "text-emerald-600" },
          Prototyping: { icon: j.A, color: "text-violet-600" },
          Stripe: { icon: z.A, color: "text-indigo-600" },
          "D3.js": { icon: u.A, color: "text-orange-500" },
          "OpenAI API": { icon: m.A, color: "text-emerald-600" },
          API: { icon: c.A, color: "text-zinc-600 dark:text-zinc-400" },
          "Chart.js": { icon: u.A, color: "text-rose-500" },
          "React Native": { icon: l.A, color: "text-sky-500" },
          Supabase: { icon: h.A, color: "text-emerald-500" },
          Mobile: { icon: c.A, color: "text-zinc-600 dark:text-zinc-400" },
          Motion: { icon: m.A, color: "text-pink-500" },
          Axios: { icon: v.A, color: "text-blue-600" },
          "React Router": { icon: g.A, color: "text-rose-500" },
          "Lucide React": { icon: k.A, color: "text-emerald-600" },
          "Lucide Icons": { icon: k.A, color: "text-emerald-600" },
          "shadcn/ui": { icon: b.A, color: "text-zinc-700 dark:text-zinc-200" },
          "MongoDB / Mongoose": { icon: h.A, color: "text-emerald-500" },
          MongoDB: { icon: h.A, color: "text-emerald-500" },
          Mongoose: { icon: h.A, color: "text-emerald-500" },
          Cloudinary: { icon: c.A, color: "text-blue-500" },
          Razorpay: { icon: C.A, color: "text-indigo-600" },
          Vite: { icon: m.A, color: "text-purple-500" },
          "UI/UX": { icon: k.A, color: "text-emerald-600" },
          "Responsive Design": { icon: c.A, color: "text-blue-500" },
          "Component Architecture": { icon: b.A, color: "text-indigo-500" },
        };
      function D(e) {
        var t;
        let { limit: a, showFilters: l = !0, variant: c = "grid" } = e,
          [d, m] = (0, n.useState)("All"),
          [p, u] = (0, n.useState)(null),
          [h, x] = (0, n.useState)(0),
          [g, b] = (0, n.useState)(0),
          [v, y] = (0, n.useState)(0),
          w = [1, 1.8, 2.6],
          [k, j] = (0, n.useState)(!0),
          [z, C] = (0, n.useState)(!1),
          D = (0, n.useRef)(null),
          [T, U] = (0, n.useState)({}),
          L = ["All", ...Array.from(new Set(_.flatMap((e) => e.tags)))],
          B = _.filter((e) => "All" === d || e.tags.includes(d)).slice(
            0,
            a || _.length,
          ),
          V = null == p || null == (t = p.parts) ? void 0 : t[h],
          O = V ? [V.image, ...(V.screenshots || [])] : [],
          W = O.slice(0, 4),
          X = Math.max(0, O.length - 4),
          H = (e) => {
            if (D.current) {
              let { scrollLeft: t, clientWidth: a } = D.current;
              D.current.scrollTo({
                left: "left" === e ? t - 0.9 * a : t + 0.9 * a,
                behavior: "smooth",
              });
            }
          };
        ((0, n.useEffect)(
          () => (
            p || z
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "unset"),
            () => {
              document.body.style.overflow = "unset";
            }
          ),
          [p, z],
        ),
          (0, n.useEffect)(() => {
            p && (b(0), j(!0), C(!1));
          }, [p]),
          (0, n.useEffect)(() => {
            y(0);
          }, [g, h]),
          (0, n.useEffect)(() => {
            z || y(0);
          }, [z]));
        let G = () => {
            O.length <= 1 || b((e) => (e + 1) % O.length);
          },
          J = () => {
            O.length <= 1 || b((e) => (e - 1 + O.length) % O.length);
          },
          Q = w[v],
          Y = v > 0;
        ((0, n.useEffect)(() => {
          if (!p || !k || z || O.length <= 1) return;
          let e = window.setInterval(() => {
            b((e) => (e + 1) % O.length);
          }, 3500);
          return () => window.clearInterval(e);
        }, [p, k, z, O.length, h]),
          (0, n.useEffect)(() => {
            if (!z) return;
            let e = (e) => {
              "Escape" === e.key
                ? C(!1)
                : "ArrowRight" !== e.key || Y
                  ? "ArrowLeft" !== e.key || Y
                    ? "+" === e.key || "=" === e.key
                      ? $()
                      : "-" === e.key
                        ? ee()
                        : "0" === e.key && et()
                    : J()
                  : G();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [z, Y]));
        let q = (e, t) => {
            if ((j(!1), "number" == typeof e)) return void b(e);
            ("next" === t && G(), "prev" === t && J());
          },
          K = (e, t) => {
            if (O.length <= 1) return;
            let a = t.offset.x,
              r = t.velocity.x;
            a < -50 || r < -400
              ? q(void 0, "next")
              : (a > 50 || r > 400) && q(void 0, "prev");
          },
          Z = (e) => {
            (j(!1), "number" == typeof e && b(e), C(!0));
          },
          $ = () => {
            y((e) => Math.min(e + 1, w.length - 1));
          },
          ee = () => {
            y((e) => Math.max(e - 1, 0));
          },
          et = () => {
            y(0);
          };
        return (0, r.jsxs)("div", {
          className: "w-full",
          children: [
            l &&
              (0, r.jsx)("div", {
                className:
                  "flex flex-wrap justify-center lg:justify-start gap-3 mb-10 md:mb-12",
                children: L.map((e) =>
                  (0, r.jsx)(
                    "button",
                    {
                      onClick: () => m(e),
                      className:
                        "px-5 py-2 rounded-full text-sm font-bold transition-all ".concat(
                          d === e
                            ? "bg-emerald-500 text-zinc-950"
                            : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50",
                        ),
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
            (0, r.jsxs)("div", {
              className: "relative group/main",
              children: [
                "scroll" === c &&
                  B.length > 0 &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("button", {
                        onClick: () => H("left"),
                        className:
                          "absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-500 opacity-0 group-hover/main:opacity-100 transition-all hover:bg-emerald-500 hover:text-zinc-950 hidden lg:flex items-center justify-center shadow-xl",
                        children: (0, r.jsx)(N.A, { size: 22 }),
                      }),
                      (0, r.jsx)("button", {
                        onClick: () => H("right"),
                        className:
                          "absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-500 opacity-0 group-hover/main:opacity-100 transition-all hover:bg-emerald-500 hover:text-zinc-950 hidden lg:flex items-center justify-center shadow-xl",
                        children: (0, r.jsx)(A.A, { size: 22 }),
                      }),
                    ],
                  }),
                (0, r.jsx)(i.P.div, {
                  layout: !0,
                  ref: D,
                  className:
                    "scroll" === c
                      ? "flex gap-5 md:gap-6 overflow-x-auto px-1 sm:px-2 md:px-4 pb-6 scroll-smooth snap-x snap-mandatory scrollbar-hide justify-start"
                      : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8",
                  children: (0, r.jsx)(s.N, {
                    mode: "popLayout",
                    children: B.map((e) => {
                      var t, a;
                      let n = null != (a = T[e.title]) ? a : 0,
                        s = null == (t = e.parts) ? void 0 : t[n];
                      return (0, r.jsxs)(
                        i.P.div,
                        {
                          layout: !0,
                          initial: { opacity: 0, y: 30 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, margin: "-50px" },
                          exit: { opacity: 0, scale: 0.9 },
                          transition: { duration: 0.5 },
                          onClick: () => {
                            var t;
                            let a = null != (t = T[e.title]) ? t : 0;
                            (u(e), x(a), b(0), j(!0), C(!1), y(0));
                          },
                          className:
                            "group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-all cursor-pointer snap-start shadow-sm hover:shadow-md ".concat(
                              "scroll" === c
                                ? "w-[84vw] max-w-[360px] sm:w-[380px] md:w-[420px] lg:w-[440px] flex-shrink-0"
                                : "w-full",
                            ),
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "relative aspect-[4/3] overflow-hidden",
                              children: [
                                (0, r.jsx)(o.default, {
                                  src:
                                    (null == s ? void 0 : s.image) || e.image,
                                  alt: e.title,
                                  fill: !0,
                                  className:
                                    "object-cover group-hover:scale-110 transition-transform duration-500",
                                  referrerPolicy: "no-referrer",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4",
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-white text-zinc-950 px-6 py-2 rounded-full font-bold text-sm",
                                    children: "View Details",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "p-6 md:p-8",
                              children: [
                                e.parts &&
                                  e.parts.length > 0 &&
                                  (0, r.jsx)("div", {
                                    className: "flex gap-2 mb-4 flex-wrap",
                                    onClick: (e) => e.stopPropagation(),
                                    children: e.parts.map((t, a) => {
                                      var n;
                                      return (0, r.jsx)(
                                        "button",
                                        {
                                          onClick: () =>
                                            U((t) => ({ ...t, [e.title]: a })),
                                          className:
                                            "px-3 py-1.5 rounded-full text-xs font-semibold transition-all ".concat(
                                              (null != (n = T[e.title])
                                                ? n
                                                : 0) === a
                                                ? "bg-emerald-500 text-zinc-950"
                                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-emerald-500/10",
                                            ),
                                          children: t.name,
                                        },
                                        t.name,
                                      );
                                    }),
                                  }),
                                (0, r.jsx)("div", {
                                  className: "flex flex-wrap gap-2 mb-4",
                                  children: e.tags.map((e) =>
                                    (0, r.jsx)(
                                      "span",
                                      {
                                        className:
                                          "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded text-emerald-500 bg-emerald-500/10",
                                        children: e,
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                                (0, r.jsx)("h3", {
                                  className:
                                    "text-xl font-display font-bold mb-4 text-zinc-900 dark:text-white",
                                  children: e.title,
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "flex flex-wrap items-center gap-3 mb-5",
                                  children: (
                                    (null == s ? void 0 : s.skills) || []
                                  ).map((e) => {
                                    let t = M[e.name] || {
                                        icon: f.A,
                                        color: "text-emerald-500",
                                      },
                                      a = t.icon;
                                    return (0, r.jsx)(
                                      "div",
                                      {
                                        className:
                                          "w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 group-hover:border-emerald-500/30 transition-colors",
                                        title: e.name,
                                        children: (0, r.jsx)(a, {
                                          size: 14,
                                          className: t.color,
                                        }),
                                      },
                                      e.name,
                                    );
                                  }),
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6",
                                  children:
                                    (null == s ? void 0 : s.description) ||
                                    e.description,
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex flex-col sm:flex-row gap-3",
                                  onClick: (e) => e.stopPropagation(),
                                  children: [
                                    (null == s ? void 0 : s.demo) &&
                                      (0, r.jsxs)("a", {
                                        href: s.demo,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 px-4 py-3 rounded-2xl font-semibold text-sm transition-all",
                                        children: [
                                          "Live Demo",
                                          (0, r.jsx)(P.A, { size: 16 }),
                                        ],
                                      }),
                                    (null == s ? void 0 : s.github) &&
                                      (0, r.jsxs)("a", {
                                        href: s.github,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white px-4 py-3 rounded-2xl font-semibold text-sm border border-zinc-200 dark:border-zinc-700 transition-all",
                                        children: [
                                          "View Code",
                                          (0, r.jsx)(S.A, { size: 16 }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        e.title,
                      );
                    }),
                  }),
                }),
              ],
            }),
            (0, r.jsx)(s.N, {
              children:
                p &&
                V &&
                (0, r.jsxs)("div", {
                  className:
                    "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-x-hidden",
                  children: [
                    (0, r.jsx)(i.P.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      onClick: () => {
                        (u(null), C(!1));
                      },
                      className:
                        "absolute inset-0 bg-zinc-950/90 backdrop-blur-sm",
                    }),
                    (0, r.jsxs)(i.P.div, {
                      initial: { opacity: 0, scale: 0.9, y: 20 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.9, y: 20 },
                      className:
                        "relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-3xl md:rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl flex flex-col mx-auto",
                      children: [
                        (0, r.jsx)("button", {
                          onClick: () => {
                            (u(null), C(!1));
                          },
                          className:
                            "absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-full transition-colors",
                          children: (0, r.jsx)(E.A, {
                            size: 20,
                            className: "md:w-6 md:h-6",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "overflow-y-auto overflow-x-hidden scrollbar-hide p-4 sm:p-6 md:p-12",
                          children: (0, r.jsxs)("div", {
                            className:
                              "grid lg:grid-cols-2 gap-6 md:gap-12 min-w-0",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "space-y-6 order-1 min-w-0",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "relative aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 group/carousel",
                                    children: [
                                      (0, r.jsx)(s.N, {
                                        mode: "wait",
                                        children: (0, r.jsx)(
                                          i.P.div,
                                          {
                                            initial: {
                                              opacity: 0,
                                              scale: 1.02,
                                              x: 24,
                                            },
                                            animate: {
                                              opacity: 1,
                                              scale: 1,
                                              x: 0,
                                            },
                                            exit: {
                                              opacity: 0,
                                              scale: 0.985,
                                              x: -24,
                                            },
                                            transition: {
                                              duration: 0.42,
                                              ease: [0.22, 1, 0.36, 1],
                                            },
                                            drag: O.length > 1 && "x",
                                            dragConstraints: {
                                              left: 0,
                                              right: 0,
                                            },
                                            dragElastic: 0.12,
                                            dragTransition: {
                                              bounceStiffness: 320,
                                              bounceDamping: 24,
                                            },
                                            onPointerDown: () => j(!1),
                                            onDragEnd: K,
                                            onClick: () => Z(),
                                            className:
                                              "relative w-full h-full touch-pan-y cursor-zoom-in",
                                            children: (0, r.jsx)(o.default, {
                                              src: O[g],
                                              alt: ""
                                                .concat(p.title, " view ")
                                                .concat(g + 1),
                                              fill: !0,
                                              className:
                                                "object-cover select-none pointer-events-none",
                                              referrerPolicy: "no-referrer",
                                              draggable: !1,
                                            }),
                                          },
                                          ""
                                            .concat(p.title, "-")
                                            .concat(h, "-")
                                            .concat(g),
                                        ),
                                      }),
                                      O.length > 1 &&
                                        (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("button", {
                                              onClick: () => q(void 0, "prev"),
                                              className:
                                                "absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-zinc-900/80 text-white border border-zinc-800 opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity hover:bg-emerald-500 hover:text-zinc-950",
                                              children: (0, r.jsx)(N.A, {
                                                size: 18,
                                              }),
                                            }),
                                            (0, r.jsx)("button", {
                                              onClick: () => q(void 0, "next"),
                                              className:
                                                "absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-zinc-900/80 text-white border border-zinc-800 opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity hover:bg-emerald-500 hover:text-zinc-950",
                                              children: (0, r.jsx)(A.A, {
                                                size: 18,
                                              }),
                                            }),
                                            (0, r.jsx)("div", {
                                              className:
                                                "absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20",
                                              children: O.map((e, t) =>
                                                (0, r.jsx)(
                                                  "button",
                                                  {
                                                    onClick: () => q(t),
                                                    className:
                                                      "h-2 rounded-full transition-all ".concat(
                                                        t === g
                                                          ? "bg-emerald-500 w-6"
                                                          : "bg-white/30 hover:bg-white/50 w-2",
                                                      ),
                                                  },
                                                  t,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "min-w-0",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "grid grid-cols-4 gap-3 sm:hidden",
                                        children: W.map((e, t) =>
                                          3 === t && X > 0
                                            ? (0, r.jsxs)(
                                                "button",
                                                {
                                                  onClick: () => Z(4),
                                                  className:
                                                    "relative aspect-video rounded-2xl overflow-hidden border transition-all min-w-0 ".concat(
                                                      g >= 4
                                                        ? "border-emerald-500 ring-2 ring-emerald-500/20"
                                                        : "border-zinc-300 dark:border-zinc-800",
                                                    ),
                                                  children: [
                                                    (0, r.jsx)(o.default, {
                                                      src: e,
                                                      alt: ""
                                                        .concat(
                                                          p.title,
                                                          " thumbnail ",
                                                        )
                                                        .concat(t + 1),
                                                      fill: !0,
                                                      className: "object-cover",
                                                      referrerPolicy:
                                                        "no-referrer",
                                                    }),
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "absolute inset-0 bg-black/60 flex items-center justify-center",
                                                      children: (0, r.jsxs)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-white text-sm font-bold",
                                                          children: ["+", X],
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                },
                                                "thumb-more-".concat(t),
                                              )
                                            : (0, r.jsx)(
                                                "button",
                                                {
                                                  onClick: () => Z(t),
                                                  className:
                                                    "relative aspect-video rounded-2xl overflow-hidden border transition-all min-w-0 ".concat(
                                                      t === g
                                                        ? "border-emerald-500 ring-2 ring-emerald-500/20"
                                                        : "border-zinc-300 dark:border-zinc-800 grayscale hover:grayscale-0",
                                                    ),
                                                  children: (0, r.jsx)(
                                                    o.default,
                                                    {
                                                      src: e,
                                                      alt: ""
                                                        .concat(
                                                          p.title,
                                                          " thumbnail ",
                                                        )
                                                        .concat(t + 1),
                                                      fill: !0,
                                                      className: "object-cover",
                                                      referrerPolicy:
                                                        "no-referrer",
                                                    },
                                                  ),
                                                },
                                                "".concat(e, "-").concat(t),
                                              ),
                                        ),
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "hidden sm:grid grid-cols-3 gap-3 sm:gap-4",
                                        children: O.map((e, t) =>
                                          (0, r.jsx)(
                                            "button",
                                            {
                                              onClick: () => Z(t),
                                              className:
                                                "relative aspect-video rounded-2xl overflow-hidden border transition-all min-w-0 ".concat(
                                                  t === g
                                                    ? "border-emerald-500 ring-2 ring-emerald-500/20"
                                                    : "border-zinc-300 dark:border-zinc-800 grayscale hover:grayscale-0",
                                                ),
                                              children: (0, r.jsx)(o.default, {
                                                src: e,
                                                alt: ""
                                                  .concat(
                                                    p.title,
                                                    " thumbnail ",
                                                  )
                                                  .concat(t + 1),
                                                fill: !0,
                                                className: "object-cover",
                                                referrerPolicy: "no-referrer",
                                              }),
                                            },
                                            "".concat(e, "-").concat(t),
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "space-y-8 order-2 min-w-0",
                                children: [
                                  (0, r.jsxs)("div", {
                                    children: [
                                      p.parts &&
                                        (0, r.jsx)("div", {
                                          className:
                                            "flex gap-2 mb-6 flex-wrap",
                                          children: p.parts.map((e, t) =>
                                            (0, r.jsx)(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (x(t), b(0), j(!0), C(!1));
                                                },
                                                className:
                                                  "px-4 py-2 rounded-full text-sm font-semibold transition-all ".concat(
                                                    h === t
                                                      ? "bg-emerald-500 text-zinc-950"
                                                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-emerald-500/10",
                                                  ),
                                                children: e.name,
                                              },
                                              e.name,
                                            ),
                                          ),
                                        }),
                                      (0, r.jsx)("div", {
                                        className: "flex flex-wrap gap-2 mb-6",
                                        children: p.tags.map((e) =>
                                          (0, r.jsx)(
                                            "span",
                                            {
                                              className:
                                                "text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full",
                                              children: e,
                                            },
                                            e,
                                          ),
                                        ),
                                      }),
                                      (0, r.jsxs)("h2", {
                                        className:
                                          "text-3xl md:text-5xl font-display font-bold mb-6 text-zinc-900 dark:text-white break-words",
                                        children: [
                                          p.title,
                                          p.parts &&
                                            (0, r.jsxs)("span", {
                                              className:
                                                "text-emerald-500 ml-2",
                                              children: ["— ", V.name],
                                            }),
                                        ],
                                      }),
                                      V.hosting &&
                                        (0, r.jsxs)("div", {
                                          className: "mb-6",
                                          children: [
                                            (0, r.jsx)("p", {
                                              className:
                                                "text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2",
                                              children: "Hosting",
                                            }),
                                            (0, r.jsx)("span", {
                                              className:
                                                "inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-500 px-3 py-1 text-sm font-semibold",
                                              children: V.hosting,
                                            }),
                                          ],
                                        }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-8 break-words",
                                        children: V.longDescription,
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "space-y-6 mb-10",
                                        children: [
                                          (0, r.jsx)("h4", {
                                            className:
                                              "text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500",
                                            children: "Technologies Used",
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                            children: V.skills.map((e) => {
                                              let t = M[e.name] || {
                                                  icon: f.A,
                                                  color: "text-emerald-500",
                                                },
                                                a = t.icon;
                                              return (0, r.jsxs)(
                                                "div",
                                                {
                                                  className: "min-w-0",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex justify-between items-center gap-3 mb-2 min-w-0",
                                                      children: [
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "flex items-center gap-2 min-w-0",
                                                          children: [
                                                            (0, r.jsx)(a, {
                                                              size: 14,
                                                              className:
                                                                t.color,
                                                            }),
                                                            (0, r.jsx)("span", {
                                                              className:
                                                                "text-zinc-700 dark:text-zinc-300 text-sm font-medium truncate",
                                                              children: e.name,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsxs)("span", {
                                                          className:
                                                            "text-emerald-500 text-[10px] font-bold shrink-0",
                                                          children: [
                                                            e.percentage,
                                                            "%",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden",
                                                      children: (0, r.jsx)(
                                                        i.P.div,
                                                        {
                                                          initial: { width: 0 },
                                                          animate: {
                                                            width: "".concat(
                                                              e.percentage,
                                                              "%",
                                                            ),
                                                          },
                                                          transition: {
                                                            duration: 1,
                                                            delay: 0.3,
                                                            ease: "easeOut",
                                                          },
                                                          className:
                                                            "h-full bg-emerald-500 rounded-full",
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                },
                                                e.name,
                                              );
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4",
                                    children: [
                                      V.demo &&
                                        (0, r.jsxs)("a", {
                                          href: V.demo,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all",
                                          children: [
                                            "Live Demo ",
                                            (0, r.jsx)(P.A, { size: 18 }),
                                          ],
                                        }),
                                      V.github &&
                                        (0, r.jsxs)("a", {
                                          href: V.github,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all border border-zinc-200 dark:border-zinc-700",
                                          children: [
                                            "View Code ",
                                            (0, r.jsx)(S.A, { size: 18 }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(s.N, {
                          children:
                            z &&
                            (0, r.jsxs)("div", {
                              className:
                                "fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6",
                              children: [
                                (0, r.jsx)(i.P.div, {
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  onClick: () => C(!1),
                                  className:
                                    "absolute inset-0 bg-black/95 backdrop-blur-md",
                                }),
                                (0, r.jsxs)(i.P.div, {
                                  initial: { opacity: 0, scale: 0.94, y: 12 },
                                  animate: { opacity: 1, scale: 1, y: 0 },
                                  exit: { opacity: 0, scale: 0.96, y: 12 },
                                  transition: { duration: 0.25 },
                                  className:
                                    "relative z-10 w-full max-w-7xl h-[82vh] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl",
                                  children: [
                                    (0, r.jsx)("button", {
                                      onClick: () => C(!1),
                                      className:
                                        "absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors",
                                      children: (0, r.jsx)(E.A, { size: 22 }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "absolute top-4 left-4 z-30 flex items-center gap-2 rounded-full bg-black/50 px-2 py-2",
                                      children: [
                                        (0, r.jsx)("button", {
                                          onClick: ee,
                                          disabled: 0 === v,
                                          className:
                                            "p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition",
                                          children: (0, r.jsx)(R.A, {
                                            size: 18,
                                          }),
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "min-w-[52px] text-center text-sm font-semibold text-white",
                                          children: [Q, "x"],
                                        }),
                                        (0, r.jsx)("button", {
                                          onClick: $,
                                          disabled: v === w.length - 1,
                                          className:
                                            "p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition",
                                          children: (0, r.jsx)(F.A, {
                                            size: 18,
                                          }),
                                        }),
                                        (0, r.jsx)("button", {
                                          onClick: et,
                                          disabled: 0 === v,
                                          className:
                                            "p-2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition",
                                          children: (0, r.jsx)(I.A, {
                                            size: 18,
                                          }),
                                        }),
                                      ],
                                    }),
                                    O.length > 1 &&
                                      !Y &&
                                      (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("button", {
                                            onClick: J,
                                            className:
                                              "absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-emerald-500 text-white hover:text-zinc-950 transition-all",
                                            children: (0, r.jsx)(N.A, {
                                              size: 24,
                                            }),
                                          }),
                                          (0, r.jsx)("button", {
                                            onClick: G,
                                            className:
                                              "absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-emerald-500 text-white hover:text-zinc-950 transition-all",
                                            children: (0, r.jsx)(A.A, {
                                              size: 24,
                                            }),
                                          }),
                                        ],
                                      }),
                                    (0, r.jsx)(s.N, {
                                      mode: "wait",
                                      children: (0, r.jsx)(
                                        i.P.div,
                                        {
                                          initial: {
                                            opacity: 0,
                                            scale: 1.02,
                                            x: 30,
                                          },
                                          animate: {
                                            opacity: 1,
                                            scale: 1,
                                            x: 0,
                                          },
                                          exit: {
                                            opacity: 0,
                                            scale: 0.98,
                                            x: -30,
                                          },
                                          transition: {
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1],
                                          },
                                          drag: !!Y || (O.length > 1 && "x"),
                                          dragConstraints: Y
                                            ? {
                                                top: -300,
                                                bottom: 300,
                                                left: -500,
                                                right: 500,
                                              }
                                            : { left: 0, right: 0 },
                                          dragElastic: Y ? 0.04 : 0.12,
                                          dragTransition: {
                                            bounceStiffness: 320,
                                            bounceDamping: 24,
                                          },
                                          onDragEnd: Y ? void 0 : K,
                                          onDoubleClick: () => {
                                            0 === v
                                              ? y(1)
                                              : 1 === v
                                                ? y(2)
                                                : y(0);
                                          },
                                          className:
                                            "relative w-full h-full touch-pan-y ".concat(
                                              Y
                                                ? "cursor-move active:cursor-grabbing"
                                                : "cursor-grab active:cursor-grabbing",
                                            ),
                                          children: (0, r.jsx)(i.P.div, {
                                            animate: { scale: Q },
                                            transition: {
                                              duration: 0.25,
                                              ease: "easeOut",
                                            },
                                            className: "relative w-full h-full",
                                            children: (0, r.jsx)(o.default, {
                                              src: O[g],
                                              alt: ""
                                                .concat(
                                                  p.title,
                                                  " enlarged view ",
                                                )
                                                .concat(g + 1),
                                              fill: !0,
                                              className:
                                                "object-contain select-none pointer-events-none",
                                              referrerPolicy: "no-referrer",
                                              priority: !0,
                                              draggable: !1,
                                            }),
                                          }),
                                        },
                                        "lightbox-"
                                          .concat(p.title, "-")
                                          .concat(h, "-")
                                          .concat(g),
                                      ),
                                    }),
                                    O.length > 1 &&
                                      !Y &&
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2",
                                        children: O.map((e, t) =>
                                          (0, r.jsx)(
                                            "button",
                                            {
                                              onClick: () => b(t),
                                              className:
                                                "h-2 rounded-full transition-all ".concat(
                                                  t === g
                                                    ? "w-6 bg-emerald-500"
                                                    : "w-2 bg-white/40 hover:bg-white/70",
                                                ),
                                            },
                                            t,
                                          ),
                                        ),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
            }),
          ],
        });
      }
    },
    8743: (e, t, a) => {
      a.d(t, { default: () => m });
      var r = a(5155),
        n = a(5797),
        i = a(4684),
        s = a(7333),
        o = a(7378),
        l = a(7161),
        c = a(2619),
        d = a.n(c);
      function m() {
        return (0, r.jsx)("footer", {
          className:
            "py-12 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors",
          children: (0, r.jsx)(n.P.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: "max-w-7xl mx-auto px-6",
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col md:flex-row justify-between items-center gap-8",
              children: [
                (0, r.jsxs)("div", {
                  className: "text-center md:text-left",
                  children: [
                    (0, r.jsxs)(d(), {
                      href: "/",
                      className:
                        "text-2xl font-display font-bold tracking-tighter mb-2 block text-zinc-900 dark:text-white",
                      children: [
                        "PORTFOLIO",
                        (0, r.jsx)("span", {
                          className: "text-emerald-500",
                          children: ".",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("p", {
                      className: "text-zinc-500 dark:text-zinc-500 text-sm",
                      children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        "  Portfolio. All rights reserved.",
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-6",
                  children: [
                    (0, r.jsx)("a", {
                      href: "#",
                      className:
                        "text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors",
                      children: (0, r.jsx)(i.A, { size: 20 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "#",
                      className:
                        "text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors",
                      children: (0, r.jsx)(s.A, { size: 20 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "#",
                      className:
                        "text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors",
                      children: (0, r.jsx)(o.A, { size: 20 }),
                    }),
                    (0, r.jsx)("a", {
                      href: "#",
                      className:
                        "text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors",
                      children: (0, r.jsx)(l.A, { size: 20 }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "text-zinc-500 dark:text-zinc-500 text-sm font-medium",
                  children: [
                    "Built with ",
                    (0, r.jsx)("span", {
                      className: "text-emerald-500",
                      children: "Next.js",
                    }),
                    " & ",
                    (0, r.jsx)("span", {
                      className: "text-emerald-500",
                      children: "Tailwind",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
