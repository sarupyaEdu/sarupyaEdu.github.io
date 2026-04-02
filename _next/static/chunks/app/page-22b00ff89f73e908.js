(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1902: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => m });
      var i = a(5155),
        s = a(2115),
        r = a(5797),
        n = a(1847);
      let l = (0, n.A)("mail", [
          [
            "path",
            { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" },
          ],
          [
            "rect",
            {
              x: "2",
              y: "4",
              width: "20",
              height: "16",
              rx: "2",
              key: "izxlao",
            },
          ],
        ]),
        o = (0, n.A)("message-square", [
          [
            "path",
            {
              d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
              key: "18887p",
            },
          ],
        ]),
        d = (0, n.A)("loader-circle", [
          ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
        ]);
      var c = a(8085);
      function m() {
        let [e, t] = (0, s.useState)({
            name: "",
            email: "",
            subject: "",
            message: "",
          }),
          [a, n] = (0, s.useState)({}),
          [m, x] = (0, s.useState)(!1),
          [p, h] = (0, s.useState)(""),
          [u, b] = (0, s.useState)(""),
          g = "sarupyadatta@gmail.com",
          w = "917003072392",
          y = (e) => {
            let { name: a, value: i } = e.target;
            (t((e) => ({ ...e, [a]: i })),
              n((e) => ({ ...e, [a]: "" })),
              h(""),
              b(""));
          },
          v = () => {
            let t = {};
            return (
              e.name.trim() || (t.name = "Name is required"),
              e.email.trim()
                ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email) ||
                  (t.email = "Enter a valid email address")
                : (t.email = "Email is required"),
              e.subject.trim() || (t.subject = "Subject is required"),
              e.message.trim()
                ? e.message.trim().length < 10 &&
                  (t.message = "Message should be at least 10 characters")
                : (t.message = "Message is required"),
              n(t),
              0 === Object.keys(t).length
            );
          },
          f = async (a) => {
            if ((a.preventDefault(), v()))
              try {
                (x(!0), h(""), b(""));
                let a = encodeURIComponent(
                    "".concat(e.subject, " | From ").concat(e.name),
                  ),
                  i = encodeURIComponent(
                    "Name: "
                      .concat(e.name, "\nEmail: ")
                      .concat(e.email, "\n\nMessage:\n")
                      .concat(e.message),
                  ),
                  s = "mailto:"
                    .concat(g, "?subject=")
                    .concat(a, "&body=")
                    .concat(i);
                ((window.location.href = s),
                  b("success"),
                  h("Your email draft has been opened."),
                  t({ name: "", email: "", subject: "", message: "" }),
                  n({}));
              } catch (e) {
                (b("error"), h("Something went wrong while opening email."));
              } finally {
                x(!1);
              }
          };
        return (0, i.jsx)("section", {
          id: "contact",
          className: "py-16 md:py-24",
          children: (0, i.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6",
            children: (0, i.jsxs)("div", {
              className:
                "bg-emerald-500 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-20 overflow-hidden relative",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-emerald-400 rounded-full blur-3xl opacity-50",
                }),
                (0, i.jsx)("div", {
                  className:
                    "absolute -bottom-20 -left-20 w-48 h-48 md:w-64 md:h-64 bg-emerald-600 rounded-full blur-3xl opacity-50",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "relative z-10 grid lg:grid-cols-2 gap-10 md:gap-16 items-start",
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)(r.P.h2, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          className:
                            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-950 mb-8 leading-tight",
                          children: [
                            "Let's build something",
                            " ",
                            (0, i.jsx)("span", {
                              className: "text-white italic",
                              children: "extraordinary",
                            }),
                            " ",
                            "together.",
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "space-y-6",
                          children: [
                            (0, i.jsxs)(r.P.div, {
                              initial: { opacity: 0, x: -20 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: !0 },
                              transition: { delay: 0.1 },
                              className: "flex items-start gap-4 text-zinc-950",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-2xl bg-zinc-950/15 border border-white/20 flex items-center justify-center shrink-0",
                                  children: (0, i.jsx)(l, { size: 24 }),
                                }),
                                (0, i.jsxs)("div", {
                                  className: "min-w-0",
                                  children: [
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-xs font-bold uppercase tracking-widest text-zinc-900/70",
                                      children: "Email Me",
                                    }),
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-base sm:text-lg md:text-xl font-display font-bold text-zinc-950 break-all",
                                      children: g,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsxs)(r.P.div, {
                              initial: { opacity: 0, x: -20 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: !0 },
                              transition: { delay: 0.2 },
                              className: "flex items-start gap-4 text-zinc-950",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-2xl bg-zinc-950/15 border border-white/20 flex items-center justify-center shrink-0",
                                  children: (0, i.jsx)(o, { size: 24 }),
                                }),
                                (0, i.jsxs)("div", {
                                  children: [
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-xs font-bold uppercase tracking-widest text-zinc-900/70",
                                      children: "WhatsApp",
                                    }),
                                    (0, i.jsxs)("p", {
                                      className:
                                        "text-base sm:text-lg md:text-xl font-display font-bold text-zinc-950",
                                      children: ["+", w],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(r.P.div, {
                      initial: { opacity: 0, x: 20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      className:
                        "bg-white/90 dark:bg-zinc-950/70 backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-zinc-200 dark:border-white/10",
                      children: (0, i.jsxs)("form", {
                        className: "space-y-5 md:space-y-6",
                        onSubmit: f,
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, i.jsx)("label", {
                                    className:
                                      "text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300",
                                    children: "Name",
                                  }),
                                  (0, i.jsx)("input", {
                                    name: "name",
                                    type: "text",
                                    value: e.name,
                                    onChange: y,
                                    placeholder: "John Doe",
                                    className:
                                      "w-full bg-white dark:bg-zinc-900 border rounded-2xl px-5 py-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none transition-colors ".concat(
                                        a.name
                                          ? "border-red-500 focus:border-red-500"
                                          : "border-zinc-300 dark:border-zinc-700 focus:border-emerald-500",
                                      ),
                                  }),
                                  a.name &&
                                    (0, i.jsx)("p", {
                                      className: "text-sm text-red-600",
                                      children: a.name,
                                    }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, i.jsx)("label", {
                                    className:
                                      "text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300",
                                    children: "Email",
                                  }),
                                  (0, i.jsx)("input", {
                                    name: "email",
                                    type: "email",
                                    value: e.email,
                                    onChange: y,
                                    placeholder: "john@example.com",
                                    className:
                                      "w-full bg-white dark:bg-zinc-900 border rounded-2xl px-5 py-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none transition-colors ".concat(
                                        a.email
                                          ? "border-red-500 focus:border-red-500"
                                          : "border-zinc-300 dark:border-zinc-700 focus:border-emerald-500",
                                      ),
                                  }),
                                  a.email &&
                                    (0, i.jsx)("p", {
                                      className: "text-sm text-red-600",
                                      children: a.email,
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, i.jsx)("label", {
                                className:
                                  "text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300",
                                children: "Subject",
                              }),
                              (0, i.jsx)("input", {
                                name: "subject",
                                type: "text",
                                value: e.subject,
                                onChange: y,
                                placeholder: "Project inquiry",
                                className:
                                  "w-full bg-white dark:bg-zinc-900 border rounded-2xl px-5 py-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none transition-colors ".concat(
                                    a.subject
                                      ? "border-red-500 focus:border-red-500"
                                      : "border-zinc-300 dark:border-zinc-700 focus:border-emerald-500",
                                  ),
                              }),
                              a.subject &&
                                (0, i.jsx)("p", {
                                  className: "text-sm text-red-600",
                                  children: a.subject,
                                }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, i.jsx)("label", {
                                className:
                                  "text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300",
                                children: "Message",
                              }),
                              (0, i.jsx)("textarea", {
                                name: "message",
                                rows: 5,
                                value: e.message,
                                onChange: y,
                                placeholder: "Tell me about your project...",
                                className:
                                  "w-full bg-white dark:bg-zinc-900 border rounded-2xl px-5 py-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none transition-colors resize-none ".concat(
                                    a.message
                                      ? "border-red-500 focus:border-red-500"
                                      : "border-zinc-300 dark:border-zinc-700 focus:border-emerald-500",
                                  ),
                              }),
                              a.message &&
                                (0, i.jsx)("p", {
                                  className: "text-sm text-red-600",
                                  children: a.message,
                                }),
                            ],
                          }),
                          p &&
                            (0, i.jsx)("div", {
                              className:
                                "rounded-2xl px-4 py-3 text-sm font-medium ".concat(
                                  "success" === u
                                    ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                                    : "bg-red-100 text-red-700 border border-red-200",
                                ),
                              children: p,
                            }),
                          (0, i.jsxs)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [
                              (0, i.jsx)("button", {
                                type: "submit",
                                disabled: m,
                                className:
                                  "w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-zinc-950 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group",
                                children: m
                                  ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)(d, {
                                          size: 18,
                                          className: "animate-spin",
                                        }),
                                        "Opening Email...",
                                      ],
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        "Send Email",
                                        (0, i.jsx)(c.A, {
                                          size: 18,
                                          className:
                                            "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform",
                                        }),
                                      ],
                                    }),
                              }),
                              (0, i.jsxs)("button", {
                                type: "button",
                                onClick: () => {
                                  if (!v()) return;
                                  let t = encodeURIComponent(
                                      "Hello, my name is "
                                        .concat(e.name, ".\nEmail: ")
                                        .concat(e.email, "\nSubject: ")
                                        .concat(e.subject, "\n\nMessage:\n")
                                        .concat(e.message),
                                    ),
                                    a = "https://wa.me/"
                                      .concat(w, "?text=")
                                      .concat(t);
                                  (window.open(a, "_blank"),
                                    b("success"),
                                    h("Redirecting to WhatsApp..."));
                                },
                                className:
                                  "w-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2",
                                children: [
                                  (0, i.jsx)(o, { size: 18 }),
                                  "Send to WhatsApp",
                                ],
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
        });
      }
    },
    2324: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => S });
      var i = a(5155),
        s = a(5797),
        r = a(1847);
      let n = (0, r.A)("panels-top-left", [
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
        ],
        ["path", { d: "M3 9h18", key: "1pudct" }],
        ["path", { d: "M9 21V9", key: "1oto5p" }],
      ]);
      var l = a(5342),
        o = a(4157),
        d = a(9332),
        c = a(6835),
        m = a(5710),
        x = a(4172),
        p = a(906),
        h = a(6907);
      let u = (0, r.A)("image", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
          [
            "path",
            { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
          ],
        ]),
        b = (0, r.A)("credit-card", [
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "5",
              rx: "2",
              key: "ynyp8z",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
        ]),
        g = (0, r.A)("terminal", [
          ["path", { d: "M12 19h8", key: "baeox8" }],
          ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
        ]);
      var w = a(8150),
        y = a(8085),
        v = a(6140),
        f = a(5625),
        j = a(7828),
        k = a(9926);
      let z = (0, r.A)("monitor-smartphone", [
        [
          "path",
          {
            d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
            key: "10dyio",
          },
        ],
        ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
        ["path", { d: "M7 19h5", key: "qswx4l" }],
        [
          "rect",
          {
            width: "6",
            height: "10",
            x: "16",
            y: "12",
            rx: "2",
            key: "1egngj",
          },
        ],
      ]);
      var N = a(6154),
        A = a(9068);
      let I = [
          {
            name: "Frontend",
            icon: n,
            items: [
              { name: "React", level: 85, icon: l.A },
              { name: "Tailwind CSS", level: 85, icon: o.A },
              { name: "React Router", level: 80, icon: d.A },
              { name: "MUI", level: 75, icon: n },
              { name: "Emotion", level: 70, icon: c.A },
            ],
          },
          {
            name: "Backend",
            icon: m.A,
            items: [
              { name: "Node.js", level: 80, icon: x.A },
              { name: "Express.js", level: 85, icon: p.A },
              { name: "MongoDB / Mongoose", level: 80, icon: m.A },
              { name: "JWT Authentication", level: 78, icon: h.A },
              { name: "Cloudinary", level: 75, icon: u },
              { name: "Razorpay", level: 70, icon: b },
            ],
          },
          {
            name: "Tools",
            icon: g,
            items: [
              { name: "Vite", level: 85, icon: w.A },
              { name: "Axios", level: 85, icon: y.A },
              { name: "Postman", level: 80, icon: y.A },
              { name: "React Toastify", level: 78, icon: v.A },
              { name: "Git", level: 82, icon: d.A },
              { name: "VS Code", level: 90, icon: w.A },
            ],
          },
          {
            name: "UI & Design",
            icon: f.A,
            items: [
              { name: "Figma", level: 75, icon: f.A },
              { name: "shadcn/ui", level: 80, icon: v.A },
              { name: "Lucide React", level: 85, icon: j.A },
              { name: "Font Awesome", level: 75, icon: k.A },
              { name: "Responsive Design", level: 85, icon: z },
            ],
          },
          {
            name: "Currently Learning",
            icon: N.A,
            items: [{ name: "Next.js", level: 55, icon: A.A }],
          },
        ],
        P = {
          React: "text-sky-500",
          "Tailwind CSS": "text-cyan-500",
          "React Router": "text-rose-500",
          MUI: "text-blue-600",
          Emotion: "text-violet-500",
          "Node.js": "text-green-600",
          "Express.js": "text-zinc-600 dark:text-zinc-400",
          "MongoDB / Mongoose": "text-green-500",
          "JWT Authentication": "text-emerald-600",
          Cloudinary: "text-blue-500",
          Razorpay: "text-indigo-600",
          Vite: "text-violet-500",
          Axios: "text-blue-600",
          Postman: "text-orange-600",
          "React Toastify": "text-amber-500",
          Git: "text-orange-600",
          "VS Code": "text-blue-600",
          Figma: "text-pink-500",
          "shadcn/ui": "text-zinc-700 dark:text-zinc-200",
          "Lucide React": "text-emerald-600",
          "Font Awesome": "text-sky-600",
          "Responsive Design": "text-emerald-500",
        };
      function S() {
        return (0, i.jsx)("section", {
          id: "skills",
          className: "py-24",
          children: (0, i.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              (0, i.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, i.jsxs)(s.P.h2, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    className:
                      "text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900 dark:text-white",
                    children: [
                      "Core ",
                      (0, i.jsx)("span", {
                        className: "text-emerald-500",
                        children: "Skills",
                      }),
                    ],
                  }),
                  (0, i.jsx)(s.P.p, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: 0.1 },
                    className:
                      "max-w-2xl mx-auto text-zinc-600 dark:text-zinc-300",
                    children:
                      "Technologies and tools I have used across full-stack development, UI building, backend integration, and real-world project work.",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                children: I.map((e, t) =>
                  (0, i.jsxs)(
                    s.P.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: 0.1 * t },
                      className:
                        "p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/40 transition-all group shadow-sm hover:shadow-md",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                          children: (0, i.jsx)(e.icon, {
                            className: "text-emerald-500",
                            size: 24,
                          }),
                        }),
                        (0, i.jsx)("h3", {
                          className:
                            "text-xl font-display font-bold mb-6 text-zinc-900 dark:text-white",
                          children: e.name,
                        }),
                        (0, i.jsx)("div", {
                          className: "space-y-6",
                          children: e.items.map((e) =>
                            (0, i.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center mb-2 gap-3",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2.5 min-w-0",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "w-6 h-6 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors shrink-0",
                                            children: (0, i.jsx)(e.icon, {
                                              size: 12,
                                              className:
                                                P[e.name] || "text-emerald-500",
                                            }),
                                          }),
                                          (0, i.jsx)("span", {
                                            className:
                                              "text-zinc-700 dark:text-zinc-300 text-sm font-medium leading-snug",
                                            children: e.name,
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("span", {
                                        className:
                                          "text-emerald-500 text-[10px] font-bold shrink-0",
                                        children: [e.level, "%"],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden",
                                    children: (0, i.jsx)(s.P.div, {
                                      initial: { width: 0 },
                                      whileInView: {
                                        width: "".concat(e.level, "%"),
                                      },
                                      viewport: { once: !0 },
                                      transition: {
                                        duration: 1,
                                        delay: 0.45 + 0.1 * t,
                                        ease: "easeOut",
                                      },
                                      className:
                                        "h-full bg-emerald-500 rounded-full",
                                    }),
                                  }),
                                ],
                              },
                              e.name,
                            ),
                          ),
                        }),
                      ],
                    },
                    e.name,
                  ),
                ),
              }),
            ],
          }),
        });
      }
    },
    2424: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => d });
      var i = a(5155),
        s = a(5797),
        r = a(2619),
        n = a.n(r),
        l = a(2987),
        o = a(7336);
      function d() {
        return (0, i.jsx)("section", {
          id: "projects",
          className: "py-24 bg-zinc-50 dark:bg-zinc-900/30",
          children: (0, i.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6 text-center md:text-left",
                children: [
                  (0, i.jsxs)("div", {
                    className: "max-w-2xl mx-auto md:mx-0",
                    children: [
                      (0, i.jsxs)(s.P.h2, {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        className:
                          "text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900 dark:text-white",
                        children: [
                          "Selected ",
                          (0, i.jsx)("span", {
                            className: "text-emerald-500",
                            children: "Works",
                          }),
                        ],
                      }),
                      (0, i.jsx)(s.P.p, {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { delay: 0.1 },
                        className:
                          "max-w-xl mx-auto md:mx-0 text-zinc-600 dark:text-zinc-300",
                        children:
                          "A collection of projects that showcase my technical skills and creative problem-solving.",
                      }),
                    ],
                  }),
                  (0, i.jsx)(s.P.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: !0 },
                    className: "flex justify-center md:justify-end",
                    children: (0, i.jsxs)(n(), {
                      href: "/projects",
                      className:
                        "inline-flex items-center gap-2 text-emerald-500 font-bold hover:underline underline-offset-8",
                      children: [
                        "View all projects",
                        (0, i.jsx)(l.A, { size: 16 }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(o.A, { limit: 6, showFilters: !1, variant: "scroll" }),
              (0, i.jsx)(s.P.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: !0 },
                className: "flex justify-center mt-8 md:hidden",
                children: (0, i.jsxs)("div", {
                  className:
                    "flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest",
                  children: [
                    (0, i.jsx)("span", { children: "Swipe to explore" }),
                    (0, i.jsx)(s.P.div, {
                      animate: { x: [0, 5, 0] },
                      transition: { duration: 1.5, repeat: 1 / 0 },
                      children: (0, i.jsx)(l.A, { size: 12 }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    2987: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      let i = (0, a(1847).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    3099: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => v });
      var i = a(5155),
        s = a(5797),
        r = a(5239),
        n = a(1847);
      let l = (0, n.A)("layers", [
          [
            "path",
            {
              d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
              key: "zw3jo",
            },
          ],
          [
            "path",
            {
              d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
              key: "1wduqc",
            },
          ],
          [
            "path",
            {
              d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
              key: "kqbvx6",
            },
          ],
        ]),
        o = (0, n.A)("sparkles", [
          [
            "path",
            {
              d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
              key: "1s2grr",
            },
          ],
          ["path", { d: "M20 2v4", key: "1rf3ol" }],
          ["path", { d: "M22 4h-4", key: "gwowj6" }],
          ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
        ]);
      var d = a(8150),
        c = a(9068),
        m = a(9926),
        x = a(4172);
      let p = (0, n.A)("rocket", [
        [
          "path",
          {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz",
          },
        ],
        [
          "path",
          {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk",
          },
        ],
        [
          "path",
          { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" },
        ],
        [
          "path",
          { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" },
        ],
      ]);
      var h = a(6907);
      let u = [
          { name: "React", logo: "https://cdn.simpleicons.org/react" },
          {
            name: "Next.js",
            logo: "https://cdn.simpleicons.org/nextdotjs",
            needsInvert: !0,
          },
          { name: "Node.js", logo: "https://cdn.simpleicons.org/node.js" },
          {
            name: "Express.js",
            logo: "https://cdn.simpleicons.org/express",
            needsInvert: !0,
          },
          { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
          {
            name: "Tailwind CSS",
            logo: "https://cdn.simpleicons.org/tailwindcss",
          },
          {
            name: "shadcn/ui",
            logo: "https://cdn.simpleicons.org/radixui",
            needsInvert: !0,
          },
          { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
        ],
        b = [
          { value: "MERN", label: "Core Stack" },
          { value: "Full-Stack", label: "Development Focus" },
          { value: "Internship", label: "Industry Experience" },
          { value: "CSE", label: "Academic Background" },
        ],
        g = [
          {
            year: "Aug 2025 - Mar 2026",
            title: "Web Development Intern (MERN Stack)",
            subtitle: "Euphoria Genx",
            description:
              "Worked on responsive frontend UI, backend integration, and full-stack features using modern web technologies, improving real-world development and debugging skills.",
          },
        ],
        w = [
          {
            year: "2021 - 2025",
            title: "B.Tech in Computer Science & Engineering",
            subtitle: "Techno Main Salt Lake • CGPA: 7.2",
            description:
              "Studied core computer science subjects including programming, databases, software engineering, and web development with hands-on full-stack projects.",
          },
          {
            year: "2020",
            title: "Class XII (CBSE)",
            subtitle: "KV1 Salt Lake, WB • 72.8%",
            description: "Completed higher secondary education.",
          },
          {
            year: "2018",
            title: "Class X (CBSE)",
            subtitle: "KV1 Salt Lake, WB • 68.2%",
            description: "Completed secondary education.",
          },
        ],
        y = {
          hidden: { opacity: 0, y: 28 },
          visible: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, delay: e, ease: "easeOut" },
            };
          },
        };
      function v() {
        return (0, i.jsx)("section", {
          id: "about",
          className: "py-20 md:py-24 bg-zinc-50 dark:bg-zinc-900/30",
          children: (0, i.jsxs)("div", {
            className:
              "max-w-7xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-16",
            children: [
              (0, i.jsxs)("div", {
                className: "text-center mb-12 md:mb-16",
                children: [
                  (0, i.jsxs)(s.P.h2, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900 dark:text-white",
                    children: [
                      "About ",
                      (0, i.jsx)("span", {
                        className: "text-emerald-500",
                        children: "Me",
                      }),
                    ],
                  }),
                  (0, i.jsx)(s.P.p, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: 0.1 },
                    className:
                      "max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 dark:text-zinc-300",
                    children:
                      "A quick introduction to who I am, what I build, and the technologies I enjoy working with.",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "grid lg:grid-cols-[1.02fr_1fr] gap-10 md:gap-16 items-center",
                children: [
                  (0, i.jsxs)(s.P.div, {
                    initial: { opacity: 0, scale: 0.94, y: 24 },
                    whileInView: { opacity: 1, scale: 1, y: 0 },
                    viewport: { once: !0, amount: 0.3 },
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    className: "relative group",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute -inset-2 sm:-inset-4 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-emerald-500/15 via-transparent to-cyan-500/10 blur-2xl -z-10",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "absolute -inset-2 sm:-inset-4 border border-emerald-500/20 rounded-[2rem] sm:rounded-[2.5rem] -z-10 group-hover:scale-[1.02] transition-transform duration-500",
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "relative aspect-square rounded-[1.75rem] sm:rounded-3xl overflow-hidden border border-white/40 dark:border-white/10 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-[0_20px_80px_rgba(16,185,129,0.12)]",
                        children: [
                          (0, i.jsx)(r.default, {
                            src: "https://res.cloudinary.com/da28qhs1u/image/upload/v1775133295/Gemini_Generated_Image_g3wf7fg3wf7fg3wf_svdkge.png",
                            alt: "Sarupya Datta",
                            fill: !0,
                            className:
                              "object-cover grayscale-[0.15] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700",
                            referrerPolicy: "no-referrer",
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-transparent to-emerald-500/10",
                          }),
                          (0, i.jsxs)(s.P.div, {
                            custom: 0.1,
                            variants: y,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: { once: !0 },
                            className:
                              "absolute left-3 top-3 sm:left-5 sm:top-5 max-w-[calc(100%-2.5rem)] sm:max-w-none rounded-xl sm:rounded-2xl border border-white/30 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg",
                            children: [
                              (0, i.jsx)("p", {
                                className:
                                  "text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-zinc-500 dark:text-zinc-400",
                                children: "Focus",
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "mt-1.5 sm:mt-2 flex items-center gap-2 text-[11px] sm:text-sm font-semibold text-zinc-900 dark:text-white",
                                children: [
                                  (0, i.jsx)(l, {
                                    className:
                                      "h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 shrink-0",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "leading-tight",
                                    children: "Full-Stack Development",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)(s.P.div, {
                            custom: 0.2,
                            variants: y,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: { once: !0 },
                            className:
                              "absolute right-3 bottom-3 sm:right-5 sm:bottom-5 max-w-[calc(100%-2.5rem)] sm:max-w-none rounded-xl sm:rounded-2xl border border-white/20 bg-zinc-950/75 text-white backdrop-blur-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg",
                            children: [
                              (0, i.jsx)("p", {
                                className:
                                  "text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-zinc-300/80",
                                children: "Current Mode",
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "mt-1.5 sm:mt-2 flex items-center gap-2 text-[11px] sm:text-sm font-semibold",
                                children: [
                                  (0, i.jsx)(o, {
                                    className:
                                      "h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400 shrink-0",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "leading-tight",
                                    children: "Building polished products",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "space-y-6 md:space-y-8",
                    children: [
                      (0, i.jsxs)(s.P.h2, {
                        custom: 0.08,
                        variants: y,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, amount: 0.25 },
                        className:
                          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-900 dark:text-white leading-tight",
                        children: [
                          "Turning ",
                          (0, i.jsx)("span", {
                            className: "text-emerald-500",
                            children: "ideas",
                          }),
                          " into polished, scalable digital experiences.",
                        ],
                      }),
                      (0, i.jsxs)(s.P.p, {
                        custom: 0.16,
                        variants: y,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, amount: 0.25 },
                        className:
                          "text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed",
                        children: [
                          "I'm ",
                          (0, i.jsx)("strong", { children: "Sarupya Datta" }),
                          ", a Full-Stack MERN Developer who enjoys building fast, responsive web applications with clean interfaces and reliable backend systems. I love taking an idea from concept to deployment and refining every layer of the experience.",
                        ],
                      }),
                      (0, i.jsxs)(s.P.p, {
                        custom: 0.24,
                        variants: y,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, amount: 0.25 },
                        className:
                          "text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed",
                        children: [
                          "My work centers around",
                          " ",
                          (0, i.jsx)("strong", {
                            children:
                              "React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS",
                          }),
                          ", with a strong focus on usability, performance, and maintainable architecture. I enjoy building projects that feel modern, intuitive, and production-ready.",
                        ],
                      }),
                      (0, i.jsx)(s.P.div, {
                        custom: 0.32,
                        variants: y,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0, amount: 0.25 },
                        className: "grid grid-cols-2 gap-3 sm:gap-4",
                        children: b.map((e, t) =>
                          (0, i.jsxs)(
                            s.P.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              whileInView: { opacity: 1, y: 0 },
                              viewport: { once: !0, amount: 0.3 },
                              transition: { delay: 0.08 * t, duration: 0.55 },
                              whileHover: { y: -6 },
                              className:
                                "rounded-2xl sm:rounded-3xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)]",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "text-2xl sm:text-3xl font-display font-bold text-emerald-500 mb-2 break-words",
                                  children: e.value,
                                }),
                                (0, i.jsx)("p", {
                                  className:
                                    "text-[10px] sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-semibold leading-snug",
                                  children: e.label,
                                }),
                              ],
                            },
                            e.label,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(s.P.div, {
                custom: 0.12,
                variants: y,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, amount: 0.2 },
                className: "grid gap-8",
                children: (0, i.jsxs)("div", {
                  className:
                    "rounded-[1.75rem] sm:rounded-[2rem] border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-[0_12px_50px_rgba(15,23,42,0.08)]",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-start sm:items-center gap-3 mb-6",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0",
                          children: (0, i.jsx)(d.A, { className: "h-5 w-5" }),
                        }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("h3", {
                              className:
                                "text-xl sm:text-2xl font-display font-bold text-zinc-900 dark:text-white",
                              children: "Core Technologies",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-xs sm:text-sm text-zinc-500 dark:text-zinc-400",
                              children:
                                "Technologies I have worked with in academic, internship, and project-based development",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
                      children: u.map((e, t) =>
                        (0, i.jsxs)(
                          s.P.div,
                          {
                            initial: { opacity: 0, y: 20, scale: 0.96 },
                            whileInView: { opacity: 1, y: 0, scale: 1 },
                            viewport: { once: !0, amount: 0.3 },
                            transition: { delay: 0.06 * t, duration: 0.45 },
                            whileHover: { y: -8, scale: 1.02 },
                            className:
                              "group rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-zinc-950/50 px-3 sm:px-5 py-4 sm:py-6 text-center",
                            children: [
                              (0, i.jsx)(s.P.div, {
                                animate: { y: [0, -4, 0] },
                                transition: {
                                  duration: 2.2 + 0.08 * t,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                                className:
                                  "mx-auto mb-3 sm:mb-4 h-11 w-11 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-800/90 ring-1 ring-zinc-200 dark:ring-zinc-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300",
                                children: (0, i.jsx)("img", {
                                  src: e.logo,
                                  alt: e.name,
                                  className:
                                    "h-6 w-6 sm:h-7 sm:w-7 object-contain ".concat(
                                      e.needsInvert ? "dark:invert" : "",
                                    ),
                                }),
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-sm sm:text-base font-semibold text-zinc-900 dark:text-white break-words",
                                children: e.name,
                              }),
                            ],
                          },
                          e.name,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)("div", {
                className: "grid xl:grid-cols-[0.95fr_1.05fr] gap-6 sm:gap-8",
                children: [
                  (0, i.jsxs)(s.P.div, {
                    initial: { opacity: 0, x: -24 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0, amount: 0.25 },
                    transition: { duration: 0.65 },
                    className:
                      "rounded-[1.75rem] sm:rounded-[2rem] border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-[0_12px_50px_rgba(15,23,42,0.08)]",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex items-start sm:items-center gap-3 mb-6 sm:mb-8",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0",
                            children: (0, i.jsx)(c.A, { className: "h-5 w-5" }),
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("h3", {
                                className:
                                  "text-xl sm:text-2xl font-display font-bold text-zinc-900 dark:text-white",
                                children: "Experience & Education",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-xs sm:text-sm text-zinc-500 dark:text-zinc-400",
                                children:
                                  "My professional and academic journey",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "space-y-10",
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("div", {
                                className: "mb-4 sm:mb-5",
                                children: (0, i.jsx)("h4", {
                                  className:
                                    "text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white",
                                  children: "Experience",
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "relative z-0 overflow-visible pl-8 sm:pl-10 space-y-6 before:absolute before:z-0 before:left-[0.7rem] sm:before:left-[0.85rem] before:top-1 before:bottom-1 before:w-px before:bg-gradient-to-b before:from-emerald-500/80 before:to-zinc-300 dark:before:to-zinc-700",
                                children: g.map((e, t) =>
                                  (0, i.jsxs)(
                                    s.P.div,
                                    {
                                      initial: { opacity: 0, y: 24 },
                                      whileInView: { opacity: 1, y: 0 },
                                      viewport: { once: !0, amount: 0.3 },
                                      transition: {
                                        delay: 0.08 * t,
                                        duration: 0.5,
                                      },
                                      className: "relative z-10",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className:
                                            "absolute z-20 left-[-1.7rem] sm:left-[-2.05rem] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-[3px] sm:border-4 border-white dark:border-zinc-950 bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]",
                                        }),
                                        (0, i.jsxs)("div", {
                                          className:
                                            "rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-zinc-950/50 p-4 sm:p-5",
                                          children: [
                                            (0, i.jsx)("p", {
                                              className:
                                                "text-[11px] sm:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-emerald-500 mb-2",
                                              children: e.year,
                                            }),
                                            (0, i.jsx)("h4", {
                                              className:
                                                "text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-1 leading-snug",
                                              children: e.title,
                                            }),
                                            (0, i.jsx)("p", {
                                              className:
                                                "text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2",
                                              children: e.subtitle,
                                            }),
                                            (0, i.jsx)("p", {
                                              className:
                                                "text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed",
                                              children: e.description,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.year + e.title,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("div", {
                                className: "mb-4 sm:mb-5",
                                children: (0, i.jsx)("h4", {
                                  className:
                                    "text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white",
                                  children: "Education",
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "relative z-0 overflow-visible pl-8 sm:pl-10 space-y-6 before:absolute before:z-0 before:left-[0.7rem] sm:before:left-[0.85rem] before:top-1 before:bottom-1 before:w-px before:bg-gradient-to-b before:from-emerald-500/80 before:to-zinc-300 dark:before:to-zinc-700",
                                children: w.map((e, t) =>
                                  (0, i.jsxs)(
                                    s.P.div,
                                    {
                                      initial: { opacity: 0, y: 24 },
                                      whileInView: { opacity: 1, y: 0 },
                                      viewport: { once: !0, amount: 0.3 },
                                      transition: {
                                        delay: 0.08 * t,
                                        duration: 0.5,
                                      },
                                      className: "relative z-10",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className:
                                            "absolute z-20 left-[-1.7rem] sm:left-[-2.05rem] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-[3px] sm:border-4 border-white dark:border-zinc-950 bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]",
                                        }),
                                        (0, i.jsxs)("div", {
                                          className:
                                            "rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-zinc-950/50 p-4 sm:p-5",
                                          children: [
                                            (0, i.jsx)("p", {
                                              className:
                                                "text-[11px] sm:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-emerald-500 mb-2",
                                              children: e.year,
                                            }),
                                            (0, i.jsx)("h4", {
                                              className:
                                                "text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-1 leading-snug",
                                              children: e.title,
                                            }),
                                            (0, i.jsx)("p", {
                                              className:
                                                "text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2",
                                              children: e.subtitle,
                                            }),
                                            (0, i.jsx)("p", {
                                              className:
                                                "text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed",
                                              children: e.description,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.year + e.title,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(s.P.div, {
                    initial: { opacity: 0, x: 24 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0, amount: 0.25 },
                    transition: { duration: 0.65 },
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5",
                    children: [
                      {
                        title: "Frontend Development",
                        text: "Built responsive and visually polished interfaces using React, Next.js, and Tailwind CSS with focus on clean structure, usability, and smooth user experience.",
                        icon: m.A,
                      },
                      {
                        title: "Backend Development",
                        text: "Worked with Node.js, Express, MongoDB, and REST APIs to build backend functionality, handle data flow, and connect applications end to end.",
                        icon: x.A,
                      },
                      {
                        title: "Full-Stack Applications",
                        text: "Developed full-stack projects with authentication, dashboards, CRUD operations, and real-world workflows from frontend design to backend integration.",
                        icon: d.A,
                      },
                      {
                        title: "Project-Based Learning",
                        text: "Strengthened my development skills through hands-on projects focused on implementation, debugging, deployment, and building practical web solutions.",
                        icon: p,
                      },
                      {
                        title: "UI Refinement",
                        text: "Improved interfaces through layout adjustments, component refinement, responsive behavior, and better interaction patterns for modern web experiences.",
                        icon: l,
                      },
                      {
                        title: "Problem Solving",
                        text: "Solved real development issues involving UI bugs, API integration, application flow, and feature implementation while improving overall project reliability.",
                        icon: h.A,
                      },
                    ].map((e, t) => {
                      let a = e.icon;
                      return (0, i.jsxs)(
                        s.P.div,
                        {
                          initial: { opacity: 0, y: 22 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0, amount: 0.3 },
                          transition: { delay: 0.07 * t, duration: 0.5 },
                          whileHover: { y: -8 },
                          className:
                            "rounded-[1.75rem] sm:rounded-[2rem] border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-5 sm:p-6 shadow-[0_12px_50px_rgba(15,23,42,0.08)]",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 sm:mb-5",
                              children: (0, i.jsx)(a, { className: "h-5 w-5" }),
                            }),
                            (0, i.jsx)("h4", {
                              className:
                                "text-lg sm:text-xl font-display font-bold text-zinc-900 dark:text-white mb-3 leading-snug",
                              children: e.title,
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed",
                              children: e.text,
                            }),
                          ],
                        },
                        e.title,
                      );
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    6907: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      let i = (0, a(1847).A)("shield-check", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    7579: (e, t, a) => {
      (Promise.resolve().then(a.bind(a, 3099)),
        Promise.resolve().then(a.bind(a, 1902)),
        Promise.resolve().then(a.bind(a, 8743)),
        Promise.resolve().then(a.bind(a, 8946)),
        Promise.resolve().then(a.bind(a, 3464)),
        Promise.resolve().then(a.bind(a, 2424)),
        Promise.resolve().then(a.bind(a, 2324)));
    },
    8946: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => o });
      var i = a(5155),
        s = a(5797),
        r = a(2987);
      let n = (0, a(1847).A)("download", [
        ["path", { d: "M12 15V3", key: "m9g1x1" }],
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
      ]);
      var l = a(5239);
      function o() {
        return (0, i.jsxs)("section", {
          className:
            "relative min-h-screen overflow-hidden pt-28 sm:pt-32 lg:pt-20",
          children: [
            (0, i.jsxs)("div", {
              className: "absolute top-0 left-0 w-full h-full -z-10",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-[120px]",
                }),
                (0, i.jsx)("div", {
                  className:
                    "absolute bottom-1/4 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-[120px]",
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className:
                "max-w-7xl mx-auto px-4 sm:px-6 w-full min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-start lg:items-center",
              children: (0, i.jsxs)("div", {
                className:
                  "grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full",
                children: [
                  (0, i.jsxs)(s.P.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.3 },
                    className:
                      "flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4",
                    children: [
                      (0, i.jsxs)("a", {
                        href: "#projects",
                        className:
                          "group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all hover:scale-105",
                        children: [
                          "View My Work",
                          (0, i.jsx)(r.A, {
                            size: 20,
                            className:
                              "group-hover:translate-x-1 transition-transform",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("a", {
                        href: "https://res.cloudinary.com/da28qhs1u/image/upload/v1775136741/ATS_Friendly_Technical_Resume_86score_ardls0.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold border border-zinc-800 transition-all",
                        children: ["View CV", (0, i.jsx)(r.A, { size: 20 })],
                      }),
                      (0, i.jsxs)("a", {
                        href: "https://res.cloudinary.com/da28qhs1u/image/upload/fl_attachment/v1775136741/ATS_Friendly_Technical_Resume_86score_ardls0.pdf",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold border border-zinc-200 dark:border-zinc-800 transition-all",
                        children: ["Download CV", (0, i.jsx)(n, { size: 20 })],
                      }),
                    ],
                  }),
                  (0, i.jsx)(s.P.div, {
                    initial: { opacity: 0, scale: 0.8, rotate: 5 },
                    animate: { opacity: 1, scale: 1, rotate: 0 },
                    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
                    className: "relative block order-1 lg:order-2",
                    children: (0, i.jsxs)("div", {
                      className:
                        "relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-[5/6] lg:h-[600px] mx-auto",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "absolute -inset-3 sm:-inset-4 border border-emerald-500/20 rounded-[2.5rem] sm:rounded-[3rem] -z-10",
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "absolute -inset-5 sm:-inset-8 border border-emerald-500/10 rounded-[3rem] sm:rounded-[4rem] -z-20",
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 relative group",
                          children: [
                            (0, i.jsx)(l.default, {
                              src: "https://res.cloudinary.com/da28qhs1u/image/upload/v1773049626/student-management/photo/emictgwwnsotgy36gkka.jpg",
                              alt: "Author Portrait",
                              fill: !0,
                              className:
                                "object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100",
                              referrerPolicy: "no-referrer",
                              priority: !0,
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 dark:opacity-60",
                            }),
                            (0, i.jsx)(s.P.div, {
                              animate: { y: [0, -10, 0] },
                              transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              className:
                                "absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl",
                              children: (0, i.jsxs)("div", {
                                className: "flex items-center gap-3 sm:gap-4",
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-950 font-bold text-lg sm:text-xl",
                                    children: "SD",
                                  }),
                                  (0, i.jsxs)("div", {
                                    children: [
                                      (0, i.jsx)("p", {
                                        className:
                                          "text-zinc-900 dark:text-white font-bold text-xs sm:text-sm",
                                        children:
                                          "Sarupya Datta • Full-Stack Developer",
                                      }),
                                      (0, i.jsx)("p", {
                                        className:
                                          "text-zinc-500 text-[11px] sm:text-xs",
                                        children:
                                          "Building high-performance, user-centric digital products",
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
              }),
            }),
            (0, i.jsxs)(s.P.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1, duration: 1 },
              className:
                "absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex",
              children: [
                (0, i.jsx)("span", {
                  className:
                    "text-[10px] uppercase tracking-widest text-zinc-500 font-bold",
                  children: "Scroll",
                }),
                (0, i.jsx)("div", {
                  className:
                    "w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent",
                }),
              ],
            }),
          ],
        });
      }
    },
    9926: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      let i = (0, a(1847).A)("palette", [
        [
          "path",
          {
            d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
            key: "e79jfc",
          },
        ],
        [
          "circle",
          {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w",
          },
        ],
        [
          "circle",
          {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f",
          },
        ],
        [
          "circle",
          {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx",
          },
        ],
        [
          "circle",
          {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn",
          },
        ],
      ]);
    },
  },
  (e) => {
    (e.O(0, [619, 396, 590, 441, 255, 358], () => e((e.s = 7579))),
      (_N_E = e.O()));
  },
]);
s;
