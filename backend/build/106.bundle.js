(self.webpackChunk = self.webpackChunk || []).push([
  [106],
  {
    11738: (e, s, t) => {
      t.d(s, { f: () => a.f });
      var a = t(31286);
    },
    25173: (e, s, t) => {
      t.r(s), t.d(s, { ClientRoutes: () => Ze, default: () => Ve });
      const a = t(87681);
      const n = t(25976);
      const i = t(57562);
      const r = t(23594);
      const l = t(39711);
      const c = t(40662);
      const o = t(85893);
      const u = function () {
        const e = (0, r.v9)((e) => e.user).img;
        return (0, o.jsx)('div', {
          className: 'dropdown dropdown-end flex gap-3',
          children: (0, o.jsx)(c.qE, {
            img: e,
            size: 50,
            children: (0, o.jsxs)('ul', {
              tabIndex: 0,
              className: 'menu menu-compact dropdown-content mt-12 p-2 shadow bg-base-100 rounded-box w-52',
              children: [
                (0, o.jsx)('li', { children: (0, o.jsx)(l.rU, { to: '/client/profile', children: 'Perfil' }) }),
                (0, o.jsx)('li', { children: (0, o.jsx)(l.rU, { to: '/client/chat', children: 'Chat' }) }),
                (0, o.jsx)('li', { children: (0, o.jsx)(l.rU, { to: '/client/promo', children: 'Promociones' }) }),
                (0, o.jsx)('li', { children: (0, o.jsx)(l.rU, { to: '/client/shopping-cart', children: 'Carrito' }) }),
                (0, o.jsx)('li', {
                  children: (0, o.jsx)(l.rU, { to: '/client/history-travel', children: 'Historial de viajes' }),
                }),
                (0, o.jsx)('li', { children: (0, o.jsx)(l.rU, { to: '/client/help', children: 'Ayuda' }) }),
                (0, o.jsx)('li', {
                  children: (0, o.jsx)(c.RD, { children: (0, o.jsx)('span', { children: 'Cerrar sesión' }) }),
                }),
              ],
            }),
          }),
        });
      };
      const d = t(96974);
      const x = function () {
        const e = (0, r.v9)((e) => e.shopping).shopping;
        const s = (0, d.s0)();
        return (0, o.jsx)('div', {
          className: 'tooltip tooltip-bottom',
          'data-tip': 'Carrito',
          children: (0, o.jsxs)('div', {
            className: 'dropdown dropdown-end mr-3',
            children: [
              (0, o.jsx)('label', {
                tabIndex: 0,
                className: 'btn btn-ghost btn-circle',
                children: (0, o.jsxs)('div', {
                  className: 'indicator',
                  children: [
                    (0, o.jsx)('i', { className: 'fa-solid fa-cart-shopping text-xl' }),
                    e &&
                      (e == null ? void 0 : e.length) > 0 &&
                      (0, o.jsx)('span', { className: 'badge badge-sm indicator-item', children: e.length }),
                  ],
                }),
              }),
              (0, o.jsx)('div', {
                tabIndex: 0,
                className: 'mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow',
                children: (0, o.jsxs)('div', {
                  className: 'card-body',
                  children: [
                    (0, o.jsx)('span', {
                      className: 'font-bold text-lg',
                      children:
                        e && e.length > 0
                          ? ''.concat(
                              (e == null ? void 0 : e.length) === 1
                                ? ''.concat(e == null ? void 0 : e.length, ' articulo')
                                : ''.concat(e == null ? void 0 : e.length, ' artículos'),
                            )
                          : 'No existen artículos',
                    }),
                    (0, o.jsx)('div', {
                      className: 'card-actions',
                      children: (0, o.jsx)('button', {
                        type: 'button',
                        className: 'btn btn-primary btn-block',
                        onClick() {
                          return s('/client/shopping-cart');
                        },
                        children: 'Ver carrito',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      const m = t(94649);
      const M = function () {
        const e = (0, m.TA)({
          initialValues: { msg: '' },
          onSubmit(e, s) {
            (0, s.resetForm)();
          },
        }).handleSubmit;
        const s = (0, d.s0)();
        return (0, o.jsx)('div', {
          className: 'tooltip tooltip-bottom',
          'data-tip': 'Soporte',
          children: (0, o.jsxs)('div', {
            className: 'dropdown dropdown-end',
            children: [
              (0, o.jsx)('label', {
                tabIndex: 0,
                className: 'btn btn-ghost btn-circle',
                children: (0, o.jsx)('div', {
                  className: 'indicator',
                  children: (0, o.jsx)('i', { className: 'fa-solid fa-headset text-2xl btn btn-ghost btn-circle' }),
                }),
              }),
              (0, o.jsxs)('div', {
                tabIndex: 0,
                className:
                  'mt-3 flex flex-col dropdown-content w-52 bg-base-100 \n                    shadow-xl px-3 md:px-10 md:pt-2 w-full md:w-[400px] md:rounded-bl-[70px] \n                    md:rounded-tl-xl border rounded-xl',
                children: [
                  (0, o.jsx)('span', { className: 'self-end text-sm hidden md:block', children: 'vendedor comercial' }),
                  (0, o.jsxs)('div', {
                    className: 'flex gap-2 mt-2',
                    children: [
                      (0, o.jsx)('i', { className: 'fa-solid fa-headset hidden md:block text-6xl text-[#6B6CB0]' }),
                      (0, o.jsxs)('form', {
                        className: 'ml-6 form-control w-full',
                        onSubmit: e,
                        children: [
                          (0, o.jsxs)('div', {
                            children: [
                              (0, o.jsx)('span', { className: 'block text-left', children: 'Te ayudamos?' }),
                              (0, o.jsx)('hr', {}),
                            ],
                          }),
                          (0, o.jsxs)('div', {
                            className: ' flex flex-start justify-between mb-5 cursor-pointer',
                            children: [
                              (0, o.jsx)('div', {
                                className: 'btn btn-ghost btn-circle',
                                onClick() {
                                  window.open(
                                    'https://api.whatsapp.com/send?phone='.concat(
                                      '+593 979792049',
                                      '&text=Hola%20International%20Signature%20necesito%20soporte',
                                    ),
                                  );
                                },
                                children: (0, o.jsx)('i', { className: 'fa-brands fa-whatsapp text-2xl' }),
                              }),
                              (0, o.jsxs)('button', {
                                type: 'button',
                                className: 'btn btn__gold btn-sm mt-2',
                                onClick() {
                                  return s('/client/chat');
                                },
                                children: [
                                  'Contáctanos',
                                  (0, o.jsx)('i', { className: 'fa-solid fa-paper-plane ml-2' }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      const w = function () {
        const e = (0, r.v9)((e) => e.user);
        const s = e.name;
        const t = e.lastName;
        return (0, o.jsxs)('div', {
          className: 'navbar bg-base-100 p-5 xl:px-32 ',
          id: 'navbarClient',
          children: [
            (0, o.jsxs)('div', {
              className: 'flex-1',
              children: [
                (0, o.jsx)(l.rU, {
                  to: '/client',
                  className: ' normal-case text-xl landing__logo ml-5',
                  children: (0, o.jsx)('img', { src: n, alt: 'logo' }),
                }),
                (0, o.jsxs)('span', {
                  className: 'self-end hidden xl:block text-xl font-bold',
                  children: ['Hola, ', (0, i.b)(String(s), String(t))],
                }),
              ],
            }),
            (0, o.jsxs)('div', {
              className: 'flex items-center',
              children: [(0, o.jsx)(M, {}), (0, o.jsx)(x, {}), (0, o.jsx)(u, {})],
            }),
          ],
        });
      };
      const j = t(26736);
      const L = t(86972);
      const p = t(86455);
      const h = t.n(p);
      const f = function () {
        const e = (0, r.v9)((e) => e);
        const s = e.admin.promo.list;
        const t = e.user.sellerId;
        const a = e.chat.usersFilter;
        const n = (0, r.I0)();
        const i = (0, d.s0)();
        return (0, o.jsx)('div', {
          className: 'h-[750px] overflow-y-auto ',
          children: (0, o.jsx)('div', {
            className: 'flex flex-col gap-7 mx-5 ',
            children:
              s == null
                ? void 0
                : s.map((e, s) => {
                    const r = e.img;
                    const l = e.title;
                    const c = e.description;
                    return (0, o.jsxs)(
                      'div',
                      {
                        className: 'card shadow-xl image-full w-full h-[350px]',
                        children: [
                          (0, o.jsx)('figure', {
                            children: (0, o.jsx)('img', {
                              src: r ? ''.concat('http://ism.urgiz.com:4000', '/').concat(r) : j,
                              alt: 'banner',
                              className: 'w-full h-[350px] object-cover block',
                            }),
                          }),
                          (0, o.jsxs)('div', {
                            className: 'card-body',
                            children: [
                              (0, o.jsx)('h2', { className: 'card-title text-white text-3xl', children: l }),
                              (0, o.jsx)('div', {
                                className: 'card-actions justify-end',
                                children: (0, o.jsxs)('div', {
                                  className: ' w-full md:w-2/5 flex flex-col gap-4',
                                  children: [
                                    (0, o.jsxs)('div', {
                                      className:
                                        'h-[200px] md:bg-base-100 rounded-xl shadow-xl md:text-black p-5 overflow-y-auto',
                                      children: [
                                        (0, o.jsx)('span', {
                                          className: 'text-lg text-bold',
                                          children: 'Detalle información',
                                        }),
                                        (0, o.jsx)('div', { className: 'mt-3 md:text-gray-500', children: c }),
                                      ],
                                    }),
                                    (0, o.jsxs)('button', {
                                      className: 'btn btn__gold btn_xs',
                                      type: 'button',
                                      onClick() {
                                        return (function (e) {
                                          const s = a == null ? void 0 : a.find((e) => e.account.id === String(t));
                                          s &&
                                            (s.person.allowChat && s.account.state
                                              ? n((0, L.T9)(s))
                                              : (h().fire({
                                                  title: 'Oops!',
                                                  text: 'El vendedor asignado no se encuentra activo, por favor contáctanos en el siguiente enlace',
                                                  icon: 'warning',
                                                  showConfirmButton: !1,
                                                }),
                                                h()
                                                  .fire({
                                                    title: 'Oops!',
                                                    text: 'El vendedor asignado no se encuentra activo, por favor contáctanos en el siguiente enlace!',
                                                    icon: 'warning',
                                                    showCancelButton: !0,
                                                    confirmButtonText: 'Continuar a whatsApp?',
                                                  })
                                                  .then((t) => {
                                                    t.isConfirmed &&
                                                      window.open(
                                                        'https://api.whatsapp.com/send?phone='
                                                          .concat(
                                                            s.person.phone,
                                                            "&text=Hola%20International%20Signature%20estoy%20interesado%20en%20tu%20promoción%20'",
                                                          )
                                                          .concat(e == null ? void 0 : e.title, "'"),
                                                      );
                                                  }))),
                                            n((0, L.C4)(e)),
                                            i('/client/chat');
                                        })(e);
                                      },
                                      children: [
                                        (0, o.jsx)('i', { className: 'fa-solid fa-cart-plus mr-2' }),
                                        'Preguntar por promoción',
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      s,
                    );
                  }),
          }),
        });
      };
      const N = t(70885);
      const D = t(11738);
      const C = t(67294);
      const y = function (e) {
        let s;
        const t = e.title;
        const a = e.subtitle;
        const n = e.serviceName;
        const i = void 0 === n ? 'Hoteles' : n;
        const l = (0, C.useState)();
        const c = (0, N.Z)(l, 2);
        const u = c[0];
        const d = c[1];
        const x = (0, r.v9)((e) => e.api.services).list;
        (0, C.useEffect)(() => {
          x.forEach((e) => {
            e.name === i && d(e);
          });
        }, [d, x]);
        return (0, o.jsx)('div', {
          className:
            'absolute top-0 bottom-0 left-0 right-0 mx-auto mt-[4%] md:mt-[6%] 2xl:md:mt-[8%] flex justify-center px-5',
          children: (0, o.jsxs)('div', {
            className: 'p-7 md:p-0 xl:w-[70%] 2xl:w-[60%] xl:mb-20',
            children: [
              (0, o.jsxs)('div', {
                className: 'text-white',
                children: [
                  (0, o.jsx)('span', {
                    className: 'block text-center sm:text-left text-3xl md:text-5xl font-bold',
                    children: t,
                  }),
                  (0, o.jsx)('p', { className: 'text-base text-center mt-4 sm:text-left  md:text-xl', children: a }),
                ],
              }),
              (0, o.jsxs)('div', {
                className: 'bg-grandient-primary rounded-xl p-5 sm:p-8 mt-8',
                children: [
                  (0, o.jsx)('span', { className: 'block text-xl text-blue-900 font-bold', children: 'Servicios' }),
                  (0, o.jsx)('span', {
                    className: 'block text-xs italic text-gray-500',
                    children: 'Selecciona el servicio de interés',
                  }),
                  (0, o.jsxs)('div', {
                    className: 'mt-2',
                    children: [
                      (0, o.jsx)('div', {
                        className: 'flex gap-3 p-2 rounded bg-[#ECECCC] justify-between md:justify-evenly flex-wrap',
                        children: x.map((e, s) =>
                          (0, o.jsxs)(
                            'label',
                            {
                              className: 'flex gap-2 cursor-pointer',
                              children: [
                                (0, o.jsx)(
                                  'input',
                                  {
                                    value: e.name,
                                    defaultChecked: i === e.name,
                                    onChange(s) {
                                      d(e);
                                    },
                                    type: 'radio',
                                    name: 'services',
                                    className: 'radio checked:bg-blue-500 radio-xs md:radio-sm',
                                  },
                                  s,
                                ),
                                (0, o.jsx)('span', { children: e.name }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                      (0, o.jsx)('div', {
                        className: 'mt-4',
                        children:
                          x &&
                          (u == null ? void 0 : u.name) === 'Hoteles' &&
                          (u == null || (s = u.api) === null || void 0 === s ? void 0 : s.state) &&
                          u.state &&
                          (0, o.jsx)(D.f, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      const b = function () {
        return (0, o.jsxs)('div', {
          className: 'relative',
          children: [
            (0, o.jsx)('div', { className: 'w-full top-0 h-[950px] lg:min-h-[90vh] service_container_main' }),
            (0, o.jsx)(y, { title: 'El destino de tus sueños, esta aquí', subtitle: '¡Comienza a diseñar tu viaje!' }),
            (0, o.jsx)('div', { className: 'pt-12', children: (0, o.jsx)(c.nq, { rounded: 'rounded-2xl' }) }),
          ],
        });
      };
      const g = t(12164);
      const v = function () {
        const e = [
          {
            id: 1,
            name: 'Viaje a Bogota',
            from: 'Quito',
            img: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            goingDate: new Date(),
            returnDate: new Date(),
          },
          {
            id: 2,
            name: 'Viaje a Barcelona',
            from: 'Quito',
            img: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            goingDate: new Date(),
            returnDate: new Date(),
          },
          {
            id: 3,
            name: 'Viaje a Cancún',
            from: 'Quito',
            img: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80',
            goingDate: new Date(),
            returnDate: new Date(),
          },
          {
            id: 4,
            name: 'Viaje a Tierra Santa',
            from: 'Quito',
            img: 'https://images.unsplash.com/photo-1574513828599-a4fefc82fe7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            goingDate: new Date(),
            returnDate: new Date(),
          },
        ];
        return (0, o.jsxs)('div', {
          className: 'my-8',
          children: [
            (0, o.jsx)('span', {
              className: 'text-primary text-center xl:text-left text-3xl font-medium block',
              children: 'TOP DESTINOS / BILLETES DE AVION',
            }),
            (0, o.jsx)('div', {
              className: 'flex gap-5 flex-wrap justify-center xl:justify-between mt-5',
              children: e.map((e, s) =>
                (0, o.jsxs)(
                  'div',
                  {
                    className: 'shadow-xl w-[270px] rounded-lg bg-base-100',
                    children: [
                      (0, o.jsx)('img', {
                        src: e.img,
                        alt: 'hotel_img',
                        className: 'w-full block object-cover rounded-t-lg h-[160px]',
                      }),
                      (0, o.jsxs)('div', {
                        className: 'px-4 py-5',
                        children: [
                          (0, o.jsx)('h2', {
                            className: 'text-black text-xl font-medium block h-[40px]',
                            children: e.name,
                          }),
                          (0, o.jsxs)('p', { className: 'mt-3 text-sm my-3', children: ['Desde ', e.from] }),
                          (0, o.jsxs)('div', {
                            className: 'flex',
                            children: [
                              (0, o.jsxs)('div', {
                                className: 'w-1/2',
                                children: [
                                  (0, o.jsx)('span', { className: 'text-sm', children: 'Ida:' }),
                                  (0, o.jsx)('p', {
                                    className: 'text-sm font-bold text-[#6B6CB0]',
                                    children: (0, g.Z)(e.goingDate).format('ddd DD MMM'),
                                  }),
                                ],
                              }),
                              (0, o.jsx)('div', { className: 'border border-gray-400 h-[50px] mx-2' }),
                              (0, o.jsxs)('div', {
                                className: 'w-1/2 ml-2',
                                children: [
                                  (0, o.jsx)('span', { className: 'text-sm', children: 'Vuelta:' }),
                                  (0, o.jsx)('p', {
                                    className: 'text-sm font-bold text-[#6B6CB0]',
                                    children: (0, g.Z)(e.goingDate).format('ddd DD MMM'),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsx)('div', {
                            className: 'w-full flex justify-center mt-3',
                            children: (0, o.jsx)('button', {
                              className: 'btn__gold btn btn-xs ',
                              type: 'button',
                              children: 'Ver detalle',
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        });
      };
      const A = t(2509);
      const S = function () {
        return (0, o.jsxs)('div', {
          className: 'my-8',
          children: [
            (0, o.jsx)('span', {
              className: 'text-primary text-center xl:text-left text-3xl font-medium block',
              children: 'TOP HOTELES',
            }),
            (0, o.jsx)('div', {
              className: 'flex gap-5 flex-wrap justify-center xl:justify-between mt-5',
              children: [
                {
                  id: 1,
                  name: 'Pullman Miami Airport',
                  from: 'Quito',
                  img: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80',
                  rating: 7.6,
                },
                {
                  id: 2,
                  name: 'Sheraton Quito',
                  from: 'Quito',
                  img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  rating: 6.5,
                },
                {
                  id: 3,
                  name: 'Tequendama Bogota',
                  from: 'Quito',
                  img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  rating: 9.1,
                },
                {
                  id: 4,
                  name: 'Sani Lodge Oriente',
                  from: 'Quito',
                  img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  rating: 9.7,
                },
              ].map((e, s) =>
                (0, o.jsxs)(
                  'div',
                  {
                    className: 'shadow-xl w-[270px] rounded-lg bg-base-100',
                    children: [
                      (0, o.jsx)('img', {
                        src: e.img,
                        alt: 'hotel_img',
                        className: 'w-full block object-cover rounded-t-lg h-[160px]',
                      }),
                      (0, o.jsxs)('div', {
                        className: 'px-4 py-5',
                        children: [
                          (0, o.jsx)('h2', {
                            className: 'text-black text-xl font-medium block h-[50px]',
                            children: e.name,
                          }),
                          (0, o.jsxs)('p', { className: 'mt-3 text-sm my-3', children: ['Desde ', e.from] }),
                          (0, o.jsxs)('div', {
                            children: [
                              (0, o.jsx)('span', {
                                className: 'p-1 bg-gray-600 mr-2 text-white rounded-md text-sm',
                                children: e.rating.toFixed(1),
                              }),
                              (0, o.jsx)(A.A, {
                                initialRating: e.rating / 2,
                                fractions: 2,
                                readonly: !0,
                                emptySymbol: (0, o.jsx)('i', { className: 'fa-regular fa-star text-primary' }),
                                fullSymbol: (0, o.jsx)('i', { className: 'fa-solid fa-star text-primary' }),
                              }),
                            ],
                          }),
                          (0, o.jsx)('div', {
                            className: 'w-full flex justify-center mt-3',
                            children: (0, o.jsx)('button', {
                              className: 'btn__gold btn btn-xs ',
                              type: 'button',
                              children: 'Ver detalle',
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        });
      };
      const E = function () {
        return (0, o.jsxs)('div', {
          className: 'my-8',
          children: [
            (0, o.jsx)('span', {
              className: 'text-primary text-center xl:text-left text-3xl font-medium block',
              children: 'TOP CRUCEROS',
            }),
            (0, o.jsx)('div', {
              className: 'flex gap-5 flex-wrap justify-center xl:justify-between mt-5',
              children: [
                {
                  id: 1,
                  name: 'Celebrity Apex',
                  from: 'Galapagos',
                  img: 'https://images.unsplash.com/photo-1559599746-8823b38544c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
                  rating: 7.6,
                },
                {
                  id: 2,
                  name: 'Costa Firenze',
                  from: 'Manta',
                  img: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                  rating: 8.1,
                },
                {
                  id: 3,
                  name: 'MSC Grandiosa',
                  from: 'Catagena',
                  img: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
                  rating: 9.6,
                },
                {
                  id: 4,
                  name: 'MSC Virtuosa',
                  from: 'Manta',
                  img: 'https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
                  rating: 5.6,
                },
              ].map((e, s) =>
                (0, o.jsxs)(
                  'div',
                  {
                    className: 'shadow-xl w-[270px] rounded-lg bg-base-100',
                    children: [
                      (0, o.jsx)('img', {
                        src: e.img,
                        alt: 'hotel_img',
                        className: 'w-full block object-cover rounded-t-lg h-[160px]',
                      }),
                      (0, o.jsxs)('div', {
                        className: 'px-4 py-5',
                        children: [
                          (0, o.jsx)('h2', {
                            className: 'text-black text-xl font-medium block h-[50px]',
                            children: e.name,
                          }),
                          (0, o.jsxs)('p', { className: 'mt-3 text-sm my-3', children: ['Desde ', e.from] }),
                          (0, o.jsxs)('div', {
                            children: [
                              (0, o.jsx)('span', {
                                className: 'p-1 bg-gray-600 mr-2 text-white rounded-md text-sm',
                                children: e.rating.toFixed(1),
                              }),
                              (0, o.jsx)(A.A, {
                                initialRating: e.rating / 2,
                                fractions: 2,
                                readonly: !0,
                                emptySymbol: (0, o.jsx)('i', { className: 'fa-regular fa-star text-primary' }),
                                fullSymbol: (0, o.jsx)('i', { className: 'fa-solid fa-star text-primary' }),
                              }),
                            ],
                          }),
                          (0, o.jsx)('div', {
                            className: 'w-full flex justify-center mt-3',
                            children: (0, o.jsx)('button', {
                              className: 'btn__gold btn btn-xs ',
                              type: 'button',
                              children: 'Ver detalle',
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        });
      };
      const I = t(4942);
      const T = t(36459);
      const z = function () {
        return (0, o.jsxs)('div', {
          className: 'w-full mt-10 ',
          children: [
            (0, o.jsx)('span', { className: 'text-[#14E8C8] font-bold text-md', children: 'ASISTENCIA DEL VIAJERO' }),
            (0, o.jsxs)('div', {
              className: 'bg-secondary p-4 mt-10 rounded-xl shadow-xl flex justify-between',
              children: [
                (0, o.jsxs)('div', {
                  className: 'w-[65%]',
                  children: [
                    (0, o.jsx)('span', { className: 'text-xl mb-5 block', children: 'ASSISCARD' }),
                    (0, o.jsxs)('ul', {
                      children: [
                        (0, o.jsx)('li', { className: 'text-sm', children: 'Asistencia médica hasta USD $40.000' }),
                        (0, o.jsx)('li', {
                          className: 'text-sm',
                          children: 'Asistencia en caso de robo o extravío de documentos',
                        }),
                        (0, o.jsx)('li', { className: 'text-sm', children: 'Localización de equipajes' }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsx)('div', { className: 'hr-v' }),
                (0, o.jsx)('div', {
                  children: (0, o.jsxs)('ul', {
                    children: [
                      (0, o.jsx)('li', { className: 'text-sm', children: 'Por 11 días para 1 persona' }),
                      (0, o.jsx)('li', { className: 'line-through text-sm', children: 'Antes: USD $59.00' }),
                      (0, o.jsxs)('li', {
                        className: 'mt-5 text-xl font-bold',
                        children: [
                          (0, o.jsx)('span', { children: 'USD ' }),
                          (0, o.jsx)('strong', { children: '42.00' }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      const k = function () {
        return (0, o.jsxs)('div', {
          className: 'w-full mt-10',
          children: [
            (0, o.jsx)('span', {
              className: 'text-[#14E8C8] font-bold text-md',
              children: '¿A NOMBRE DE QUIEN EMITIMOS TU FACTURA?',
            }),
            (0, o.jsxs)('div', {
              className: 'mt-10 flex flex-col gap-4',
              children: [
                (0, o.jsxs)('div', {
                  className: 'flex gap-4',
                  children: [
                    (0, o.jsx)(c.M5, {
                      name: 'extra.bill.name',
                      text: 'Nombre',
                      className: 'input-sm bg-transparent',
                      placeholder: 'Nombre',
                    }),
                    (0, o.jsx)(c.M5, {
                      name: 'extra.bill.secondName',
                      text: 'Segundo nombre',
                      className: 'input-sm bg-transparent',
                      placeholder: 'Opcional',
                    }),
                  ],
                }),
                (0, o.jsxs)('div', {
                  className: 'flex gap-4',
                  children: [
                    (0, o.jsx)(c.M5, {
                      name: 'extra.bill.lastName',
                      text: 'Apellido',
                      className: 'input-sm bg-transparent',
                      placeholder: 'Apellido',
                    }),
                    (0, o.jsx)(c.M5, {
                      name: 'extra.bill.email',
                      text: 'Email',
                      className: 'input-sm bg-transparent',
                      placeholder: 'Email',
                    }),
                  ],
                }),
                (0, o.jsxs)('div', {
                  className: 'flex gap-4',
                  children: [
                    (0, o.jsxs)(c.M5, {
                      name: 'extra.bill.identificationDocType',
                      text: 'Tipo de documento',
                      className: 'select-sm bg-transparent',
                      placeholder: 'Tipo Identificación',
                      as: 'select',
                      children: [
                        (0, o.jsx)('option', { value: '', disabled: !0, children: 'Selecciona una opción' }),
                        (0, o.jsx)('option', { value: 'IDCARD', className: 'text-black', children: 'Cédula' }),
                        (0, o.jsx)('option', { value: 'PASSPORT', className: 'text-black', children: 'Pasaporte' }),
                      ],
                    }),
                    (0, o.jsx)(c.M5, {
                      name: 'extra.bill.identificationDocId',
                      text: 'Identificación',
                      className: 'input-sm bg-transparent',
                      placeholder: 'Identificación',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      const O = function (e) {
        const s = e.values;
        return (0, o.jsxs)('div', {
          className: 'w-full mt-10',
          children: [
            (0, o.jsx)('span', { className: 'text-[#14E8C8] font-bold text-md', children: '¿QUIENES VIAJAN?' }),
            (0, o.jsx)('span', {
              className: 'text-xs block w-[70%] mt-4',
              children:
                'Solicitamos incluir los nombres de quienes viajan para ofrecerte una mejor experiencia de usuario',
            }),
            (0, o.jsx)(m.F2, {
              name: 'extra.rooms[0].guests',
              render(e) {
                return (0, o.jsxs)('div', {
                  children: [
                    s.extra.rooms[0].guests.map((s, t) =>
                      (0, o.jsx)(
                        'div',
                        {
                          className: 'mt-10 flex flex-col gap-4',
                          children: (0, o.jsxs)('div', {
                            className: 'flex gap-4',
                            children: [
                              (0, o.jsx)(c.M5, {
                                name: 'extra.rooms[0].guests.['.concat(t, '].first_name'),
                                text: 'Nombre',
                                className: 'input-sm bg-transparent',
                                placeholder: 'Nombre',
                              }),
                              (0, o.jsx)(c.M5, {
                                name: 'extra.rooms[0].guests.['.concat(t, '].last_name'),
                                text: 'Segundo nombre',
                                className: 'input-sm bg-transparent',
                                placeholder: 'Opcional',
                              }),
                              (0, o.jsx)('button', {
                                title: 'Eliminar',
                                type: 'button',
                                className: 'btn btn-secondary btn-sm mt-6',
                                onClick() {
                                  return t !== 0 && e.remove(t);
                                },
                                children: (0, o.jsx)('i', { className: 'fa-solid fa-minus' }),
                              }),
                            ],
                          }),
                        },
                        t,
                      ),
                    ),
                    (0, o.jsx)('div', {
                      className: 'flex flex-col gap-4',
                      children: (0, o.jsxs)('span', {
                        className: 'mt-5 text-secondary font-bold cursor-pointer flex gap-4 items-center',
                        onClick() {
                          return e.push({ first_name: '', last_name: '' });
                        },
                        children: [(0, o.jsx)('i', { className: 'fa-solid fa-plus' }), ' Agregar persona'],
                      }),
                    }),
                  ],
                });
              },
            }),
          ],
        });
      };
      const Y = t(15861);
      const Q = t(87757);
      const _ = t.n(Q);
      const P = t(26252);
      const B = t(75820);
      const U = t(26833);
      const G = t(78596);
      const H = t(16923);
      const W = function (e) {
        return { type: U.C, payload: { list: e } };
      };
      const Z = t(42982);
      const V = t(44925);
      const R = t(71002);
      const F = t(81207);
      const J = t(84490);
      const q = t(44586);
      const X = t(80653);
      const K = (function () {
        const e = (0, Y.Z)(
          _().mark(function e(s) {
            return _().wrap((e) => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      new Promise((e, t) =>
                        s && s.payment_types
                          ? e(
                              s.payment_types.find((e) => {
                                const s = e.currency_code;
                                const t = e.type;
                                return s === 'USD' && t === 'deposit';
                              }),
                            )
                          : t('booking is undefined'),
                      ),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (s) {
          return e.apply(this, arguments);
        };
      })();
      const $ = t(30381);
      const ee = t.n($);
      const se = t(25108);
      const te = ['extra'];
      function ae(e, s) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          s && (a = a.filter((s) => Object.getOwnPropertyDescriptor(e, s).enumerable)), t.push.apply(t, a);
        }
        return t;
      }
      function ne(e) {
        for (let s = 1; s < arguments.length; s++) {
          var t = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? ae(Object(t), !0).forEach((s) => {
                (0, I.Z)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ae(Object(t)).forEach((s) => {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              });
        }
        return e;
      }
      const ie = function (e) {
        return { type: F.yA, payload: { checkoutId: e } };
      };
      const re = function (e) {
        return { type: F.a8, payload: { state: e } };
      };
      const le = function (e) {
        return (function () {
          const s = (0, Y.Z)(
            _().mark(function s(t) {
              let a;
              let n;
              let i;
              let r;
              let l;
              return _().wrap((s) => {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return (
                        (a = e.extra),
                        (n = (0, V.Z)(e, te)),
                        localStorage.setItem('formPayment', JSON.stringify(ne({}, a))),
                        t(re('processing')),
                        (s.next = 5),
                        (0, H.JE)(
                          (0, B.X2)({ url: '/payment', method: 'post', data: ne({}, n) }).catch((e) => {
                            e.response.status === 403 ? t((0, G.Y2)()) : (0, P.i)(), t(re('error'));
                          }),
                          'processPayment',
                        )
                      );
                    case 5:
                      (i = s.sent),
                        (r = i.status),
                        (l = i.data.data),
                        r !== 200 || (l.result.code !== '000.200.100' && l.result.code !== '000.100.112')
                          ? (t(re('error')),
                            h().fire({ title: 'Error al procesar el pago', text: l.result.description, icon: 'error' }))
                          : t(ie(l.id));
                    case 9:
                    case 'end':
                      return s.stop();
                  }
              }, s);
            }),
          );
          return function (e) {
            return s.apply(this, arguments);
          };
        })();
      };
      const ce = (function () {
        const e = (0, Y.Z)(
          _().mark(function e(s, t, a) {
            let n;
            let i;
            let r;
            let l;
            let c;
            return _().wrap((e) => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.t0 = (0, q.Z)()), (e.t1 = s), (e.next = 4), (0, J.zk)();
                  case 4:
                    return (
                      (e.t2 = e.sent),
                      (l = { partner_order_id: e.t0, book_hash: e.t1, language: 'es', user_ip: e.t2 }),
                      (c = {
                        username:
                          (t == null || (n = t.api) === null || void 0 === n ? void 0 : n.credentials.username) || '',
                        password:
                          (t == null || (i = t.api) === null || void 0 === i ? void 0 : i.credentials.password) || '',
                      }),
                      (e.next = 9),
                      (0, B.W9)({
                        url: '/api-query',
                        method: 'post',
                        data: l,
                        headers: {
                          'x-path': ''.concat(
                            (r = t.api) === null || void 0 === r ? void 0 : r.endPoint,
                            '/hotel/order/booking/form/',
                          ),
                          'x-auth': JSON.stringify(c),
                        },
                      }).catch((e) => {
                        const s = e.err;
                        let t = '';
                        switch (s) {
                          case 'timeout':
                            t = 'El sistema está experimentando problemas técnicos temporales';
                            break;
                          case 'contract_mismatch':
                            t = 'El contrato no corresponde a la habitación seleccionada';
                            break;
                          case 'double_booking_form':
                          case 'duplicate_reservation':
                            t = 'La reserva ya se encuentra confirmada';
                            break;
                          case 'hotel_not_found':
                            t = 'El hotel no se encuentra en nuestros registros';
                            break;
                          case 'insufficient_b2b_balance':
                            t = 'Límite de crédito excedido para el proveedor del servicio';
                            break;
                          case 'reservation_is_not_allowed':
                            t = 'La reserva no está permitida para el proveedor del servicio';
                            break;
                          case 'rate_not_found':
                            t = 'Habitación no encontrada';
                            break;
                          case 'unknown':
                            t = 'Error desconocido';
                            break;
                          case 'sandbox_restriction':
                            t = 'La reserva no está permitida para el modo de prueba';
                            break;
                          default:
                            t = 'Error al crear la reserva';
                        }
                        (t += ' por tal motivo se ha eliminado la habitación del carrito'),
                          a && a({ err: s || 'unspecified_error_booking', msg: t });
                      })
                    );
                  case 9:
                    return e.abrupt('return', e.sent);
                  case 10:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (s, t, a) {
          return e.apply(this, arguments);
        };
      })();
      const oe = (function () {
        const e = (0, Y.Z)(
          _().mark(function e(s, t) {
            return _().wrap((e) => {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      new Promise(
                        (function () {
                          const e = (0, Y.Z)(
                            _().mark(function e(a) {
                              let n;
                              let i;
                              let r;
                              let l;
                              let c;
                              let o;
                              let u;
                              let d;
                              let x;
                              let m;
                              let M;
                              let w;
                              let j;
                              return _().wrap((e) => {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (l = s.user),
                                        (c = s.partner),
                                        (o = s.language),
                                        (u = s.rooms),
                                        (d = s.payment_type),
                                        (x = {
                                          username:
                                            (t == null || (n = t.api) === null || void 0 === n
                                              ? void 0
                                              : n.credentials.username) || '',
                                          password:
                                            (t == null || (i = t.api) === null || void 0 === i
                                              ? void 0
                                              : i.credentials.password) || '',
                                        }),
                                        (e.next = 4),
                                        (0, B.W9)({
                                          url: '/api-query',
                                          method: 'post',
                                          data: { user: l, partner: c, language: o, rooms: u, payment_type: d },
                                          headers: {
                                            'x-path': ''.concat(
                                              t == null || (r = t.api) === null || void 0 === r ? void 0 : r.endPoint,
                                              '/hotel/order/booking/finish/',
                                            ),
                                            'x-auth': JSON.stringify(x),
                                          },
                                        })
                                      );
                                    case 4:
                                      (m = e.sent),
                                        (M = m.status),
                                        (w = m.data),
                                        (j = M === 200 && w.data.status === 'ok'),
                                        a(j);
                                    case 9:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          return function (s) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      ),
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (s, t) {
          return e.apply(this, arguments);
        };
      })();
      const ue = function (e) {
        return (function () {
          const s = (0, Y.Z)(
            _().mark(function s(t) {
              return _().wrap((s) => {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return (
                        (s.next = 2),
                        (0, H.JE)(
                          (0, B.X2)({ url: '/sales-history', method: 'post', data: e }).catch((e) => {
                            e.response.status === 403 ? t((0, G.Y2)()) : (0, P.i)();
                          }),
                          'saveBookingDB',
                        )
                      );
                    case 2:
                    case 'end':
                      return s.stop();
                  }
              }, s);
            }),
          );
          return function (e) {
            return s.apply(this, arguments);
          };
        })();
      };
      const de = (t(25108), t(78888));
      const xe = t(8817);
      const me = function (e) {
        const s = e.openModal;
        const t = e.loader;
        const a = e.setOpenModal;
        const n = (0, r.I0)();
        const i = (0, C.useRef)(null);
        return (
          (0, C.useEffect)(() => {
            const e = window.document;
            const s = function () {
              n(re('checkout'));
            };
            return (
              e.addEventListener('submit', s),
              function () {
                e.removeEventListener('submit', s);
              }
            );
          }, [i, n]),
          (0, o.jsxs)(de.u, {
            openModal: s,
            className: 'w-[450px] relative ',
            children: [
              (0, o.jsx)('div', {
                className: 'w-full grid place-content-center',
                children: (0, o.jsxs)('div', {
                  className: 'flex flex-col gap-4',
                  children: [
                    (0, o.jsx)('form', {
                      action: window.location.href.replace('payment', 'checkout'),
                      ref: i,
                      className: 'paymentWidgets',
                      'data-brands': 'VISA MASTER DINERS DISCOVER AMEX',
                    }),
                    !t &&
                      (0, o.jsx)('button', {
                        type: 'button',
                        className: 'btn w-full',
                        onClick() {
                          n(ie('')), a(!1), window.location.reload();
                        },
                        children: 'Cancelar Transacción',
                      }),
                  ],
                }),
              }),
              t &&
                (0, o.jsx)('div', {
                  className:
                    'w-full h-full grid place-content-center bg-[rgba(0, 0, 0, 0.322)] items-center absolute top-0 left-0 right-0 bottom-0',
                  children: (0, o.jsx)(xe.s, {}),
                }),
            ],
          })
        );
      };
      const Me = function () {
        const e = (0, r.v9)((e) => e.shopping);
        const s = e.shopping;
        const t = e.total;
        const a = (0, C.useState)({ total_rest: 0, total_tax: 0, total_discount: 0 });
        const n = (0, N.Z)(a, 2);
        const i = n[0];
        const l = n[1];
        return (
          (0, C.useEffect)(() => {
            if (s && s.length > 0) {
              let e = 0;
              let t = 0;
              let a = 0;
              s.forEach((s) => {
                const n = s.service.name;
                const i = s.subtotal;
                const r = s.iva;
                const l = s.discount;
                n === 'Hoteles' && (e += i), (t += r), (a += l);
              }),
                l({ total_rest: e, total_tax: t, total_discount: a });
            } else l({ total_rest: 0, total_tax: 0, total_discount: 0 });
          }, [s, l]),
          (0, o.jsxs)('div', {
            className: 'w-full',
            children: [
              (0, o.jsx)('span', { className: 'font-bold text-md', children: 'DETALLE DEL PAGO' }),
              (0, o.jsxs)('div', {
                className: 'rounded-xl mt-4 bg-base-100 shadow-xl p-5 text-black',
                children: [
                  (0, o.jsxs)('div', {
                    className: 'flex justify-between',
                    children: [
                      (0, o.jsx)('span', { children: 'Hospedaje' }),
                      (0, o.jsxs)('strong', {
                        children: ['USD ', (0, o.jsx)('span', { children: i.total_rest.toFixed(2) })],
                      }),
                    ],
                  }),
                  (0, o.jsxs)('div', {
                    className: 'flex justify-between',
                    children: [
                      (0, o.jsx)('span', { children: 'Impuestos tasas y cargos' }),
                      (0, o.jsxs)('strong', {
                        children: ['USD ', (0, o.jsx)('span', { children: (i.total_tax || 0).toFixed(2) })],
                      }),
                    ],
                  }),
                  (0, o.jsxs)('div', {
                    className: 'flex justify-between',
                    children: [
                      (0, o.jsx)('span', { children: 'Descuentos' }),
                      (0, o.jsxs)('strong', {
                        children: ['USD ', (0, o.jsx)('span', { children: (i.total_discount || 0).toFixed(2) })],
                      }),
                    ],
                  }),
                  (0, o.jsx)('hr', { className: 'my-4' }),
                  (0, o.jsxs)('div', {
                    className: 'flex justify-between',
                    children: [
                      (0, o.jsx)('span', { className: 'text-[#003C6B] font-bold', children: 'Total' }),
                      (0, o.jsxs)('strong', {
                        children: ['USD ', (0, o.jsx)('span', { children: (t || 0).toFixed(2) })],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      const we = t(19501);
      const je = we.Ry({
        extra: we.Ry({
          voucher: we.Ry({
            email: we.Z_().trim().email('correo no válido').required('correo requerido'),
            confirmEmail: we
              .Z_()
              .trim()
              .email('correo no válido')
              .required('correo requerido')
              .oneOf([we.iH('email'), null], 'Los correos no coinciden'),
          }),
          bill: we.Ry({
            name: we.Z_().required('campo requerido'),
            lastName: we.Z_().required('campo requerido'),
            email: we.Z_().email('correo no válido').required('campo requerido'),
            identificationDocType: we.Z_().required('campo requerido'),
            identificationDocId: we
              .Rx()
              .typeError('documento no válido')
              .min(10, 'mínimo 10 dígitos')
              .required('campo requerido'),
          }),
          phone: we.IX(
            we.Ry({
              number: we.Z_().trim().required('teléfono requerido').min(10, 'teléfono inválido').nullable(),
              typePhone: we.Z_().trim().required('tipo de teléfono requerido'),
            }),
          ),
          rooms: we.IX(
            we.Ry({
              guests: we.IX(
                we.Ry({
                  first_name: we
                    .Z_()
                    .trim()
                    .min(3, 'mínimo 3 caracteres')
                    .max(30, 'máximo 30 caracteres')
                    .required('nombre requerido'),
                  last_name: we
                    .Z_()
                    .trim()
                    .min(3, 'mínimo 3 caracteres')
                    .max(30, 'máximo 30 caracteres')
                    .required('apellido requerido'),
                }),
              ),
            }),
          ),
        }),
      });
      const Le = t(67555);
      const pe = t.n(Le);
      function he(e, s) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          s && (a = a.filter((s) => Object.getOwnPropertyDescriptor(e, s).enumerable)), t.push.apply(t, a);
        }
        return t;
      }
      function fe(e) {
        for (let s = 1; s < arguments.length; s++) {
          var t = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? he(Object(t), !0).forEach((s) => {
                (0, I.Z)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : he(Object(t)).forEach((s) => {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              });
        }
        return e;
      }
      const Ne = function (e) {
        const s = e.setValues;
        const t = e.values;
        const a = e.errors;
        return (0, o.jsxs)('div', {
          className: 'w-full mt-10',
          children: [
            (0, o.jsx)('span', {
              className: 'text-[#14E8C8] font-bold text-md',
              children: '¿A QUE NÚMERO PODEMOS LLAMARTE?',
            }),
            (0, o.jsx)('span', {
              className: 'text-xs block w-[70%] mt-4',
              children: 'El número de teléfono es fundamental para que gestiones tu reserva.',
            }),
            (0, o.jsx)('div', {
              className: 'mt-10 flex flex-col gap-4',
              children: (0, o.jsx)(m.F2, {
                name: 'extra.phone',
                render(e) {
                  return (0, o.jsxs)('div', {
                    children: [
                      t.extra.phone.map((e, t) =>
                        (0, o.jsx)(
                          'div',
                          {
                            className: 'mt-10 flex flex-col gap-4',
                            children: (0, o.jsxs)('div', {
                              className: 'flex gap-4',
                              children: [
                                (0, o.jsxs)(c.M5, {
                                  name: 'extra.phone.['.concat(t, '].typePhone'),
                                  text: 'Tipo de teléfono',
                                  className: 'select-sm bg-transparent',
                                  placeholder: 'Tipo de teléfono',
                                  as: 'select',
                                  children: [
                                    (0, o.jsx)('option', {
                                      value: '',
                                      disabled: !0,
                                      children: 'Selecciona una opción',
                                    }),
                                    (0, o.jsx)('option', {
                                      value: 'MOBILE',
                                      className: 'text-black',
                                      children: 'Teléfono móvil',
                                    }),
                                    (0, o.jsx)('option', {
                                      value: 'HOME',
                                      className: 'text-black',
                                      children: 'Teléfono fijo',
                                    }),
                                  ],
                                }),
                                (0, o.jsxs)('div', {
                                  className: 'text-black mt-7',
                                  children: [
                                    (0, o.jsx)(pe(), {
                                      country: 'ec',
                                      enableSearch: !0,
                                      value: 'extra.phone.['.concat(t, '].number'),
                                      containerClass: '!bg-transparent',
                                      inputClass:
                                        '!bg-transparent !input-sm !border-1 !border-primary !text-white !p-0 !pl-10',
                                      onChange(e) {
                                        s((s) =>
                                          fe(
                                            fe({}, s),
                                            {},
                                            {
                                              extra: fe(
                                                fe({}, s.extra),
                                                {},
                                                {
                                                  phone: s.extra.phone.map((s, a) =>
                                                    t === a ? fe(fe({}, s), {}, { number: e }) : s,
                                                  ),
                                                },
                                              ),
                                            },
                                          ),
                                        );
                                      },
                                    }),
                                    (0, o.jsx)('span', {
                                      className: 'block mt-2 text-red-500',
                                      children: a.extra && a.extra.phone && a.extra.phone[t] && a.extra.phone[t].number,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t,
                        ),
                      ),
                      (0, o.jsxs)('div', {
                        className: 'flex flex-col gap-4',
                        children: [
                          (0, o.jsxs)('span', {
                            className: 'mt-5 text-secondary font-bold cursor-pointer flex gap-4 items-center',
                            onClick() {
                              return e.push({ number: '', typePhone: 'MOBILE' });
                            },
                            children: [(0, o.jsx)('i', { className: 'fa-solid fa-plus' }), ' Agregar otro teléfono'],
                          }),
                          (0, o.jsxs)('span', {
                            className: 'mt-5 text-secondary font-bold cursor-pointer flex gap-4 items-center',
                            onClick() {
                              return t.extra.phone.length !== 1 && e.pop();
                            },
                            children: [
                              (0, o.jsx)('i', { className: 'fa-solid fa-minus' }),
                              'Eliminar último teléfono registrado',
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              }),
            }),
          ],
        });
      };
      function De(e, s) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          s && (a = a.filter((s) => Object.getOwnPropertyDescriptor(e, s).enumerable)), t.push.apply(t, a);
        }
        return t;
      }
      function Ce(e) {
        for (let s = 1; s < arguments.length; s++) {
          var t = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? De(Object(t), !0).forEach((s) => {
                (0, I.Z)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : De(Object(t)).forEach((s) => {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              });
        }
        return e;
      }
      const ye = function () {
        return (0, o.jsxs)('div', {
          className: 'w-full mt-10',
          children: [
            (0, o.jsx)('span', {
              className: 'text-[#14E8C8] font-bold text-md block',
              children: '¿A DONDE ENVIAMOS TU VOUCHER?',
            }),
            (0, o.jsx)('span', {
              className: 'text-xs block w-[70%] mt-4',
              children:
                'El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje',
            }),
            (0, o.jsxs)('div', {
              className: 'mt-10 flex flex-col gap-4',
              children: [
                (0, o.jsx)('div', {
                  className: 'flex gap-4',
                  children: (0, o.jsx)(c.M5, {
                    name: 'extra.voucher.email',
                    text: 'Email',
                    className: 'input-sm bg-transparent',
                    placeholder: 'example@mail.com',
                  }),
                }),
                (0, o.jsx)('div', {
                  className: 'flex gap-4',
                  children: (0, o.jsx)(c.M5, {
                    name: 'extra.voucher.confirmEmail',
                    text: 'Confirma tu email',
                    className: 'input-sm bg-transparent',
                    placeholder: 'example@mail.com',
                  }),
                }),
                (0, o.jsx)('div', {
                  className: 'flex gap-4',
                  children: (0, o.jsx)('div', {
                    className: 'form-control mt-4',
                    children: (0, o.jsxs)('label', {
                      className: 'label cursor-pointer flex justify-start gap-3',
                      children: [
                        (0, o.jsx)(m.gN, {
                          type: 'checkbox',
                          className: 'toggle toggle-primary',
                          name: 'extra.voucher.offer',
                          tabIndex: -1,
                        }),
                        (0, o.jsx)('span', { className: 'text-sm', children: 'Quiero recibir mejores ofertas' }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      const be = function (e) {
        const s = e.openModal;
        const t = e.setOpenModalTermsAndConditions;
        return (0, o.jsx)(de.u, {
          openModal: s,
          children: (0, o.jsxs)('div', {
            className: 'flex flex-col gap-4',
            children: [
              (0, o.jsx)('span', { className: 'text-2xl', children: 'Términos y condiciones' }),
              (0, o.jsx)('hr', {}),
              (0, o.jsx)('br', {}),
              (0, o.jsx)('div', {
                className: 'max-h-[40vh] overflow-y-auto scroll_list_alternative text-justify pr-3',
                children: (0, o.jsxs)('ol', {
                  className: 'flex flex-col gap-4 !list-decimal',
                  children: [
                    (0, o.jsx)('li', {
                      children:
                        'Algunos alojamientos dependiendo de la localidad pueden cobrar un “city tax” (pago directo al hotel).',
                    }),
                    (0, o.jsx)('li', { children: 'Esta reservación es NO CANCELABLE/REEMBOLSABLE.' }),
                    (0, o.jsx)('li', {
                      children:
                        'Los cambios y cancelaciones de sus reservas confirmadas, están sujetos a POLÍTICAS INTERNAS DE LOS HOTELES Y PROVEEDORES puede contactarse con nuestro departamento de atención al cliente para verificar las posibilidades de cambio.',
                    }),
                    (0, o.jsx)('li', {
                      children:
                        'En caso de emergencias durante su estancia, podrá comunicarse con los números de atención al cliente que se encontrarán en el voucher de reserva.',
                    }),
                    (0, o.jsx)('li', {
                      children:
                        'INTERNATIONAL SIGNATURE MEMBERS No se hace responsable por las condiciones de los Hoteles (se sugiere verificar comentarios, ubicación, comodidades de los hoteles, entre otros).',
                    }),
                    (0, o.jsx)('li', {
                      children:
                        'INTERNATIONAL SIGNATURE MEMBERS, no se hace responsable por eventos climáticos ó de otra índole natural que afecten su estadía durante sus vacaciones.',
                    }),
                    (0, o.jsx)('li', {
                      children:
                        'En caso de que usted encuentre una mejor tarifa, podremos aplicar la “Garantía de precio” contemplada en su contrato, previo una verificación del asesor.',
                    }),
                    (0, o.jsx)('li', {
                      children:
                        'Para poder aplicar esto, será indispensable que el usuario NO confirme la reservación a traves de la pagina web.',
                    }),
                  ],
                }),
              }),
              (0, o.jsx)('button', {
                className: 'btn w-full md:w-[200px] self-end',
                onClick() {
                  return t(!1);
                },
                children: 'Cerrar',
              }),
            ],
          }),
        });
      };
      function ge(e, s) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          s && (a = a.filter((s) => Object.getOwnPropertyDescriptor(e, s).enumerable)), t.push.apply(t, a);
        }
        return t;
      }
      const ve = function () {
        const e = (function () {
          const e = (0, r.v9)((e) => e);
          const s = e.user;
          const t = e.auth;
          const a = e.shopping;
          const n = e.client.payment;
          const i = (0, r.I0)();
          const l = {
            amount: '',
            customer: {
              givenName: s.name,
              middleName: '',
              surname: s.lastName,
              ip: '',
              merchantCustomerId: t.uid || '',
              email: s.email,
              identificationDocType: 'IDCARD',
              identificationDocId: s.doc || '',
              phone: s.phone,
            },
            merchantTransactionId: t.uid || '',
            acceptConditions: !1,
            cart: [{ name: '', description: '', price: 0, quantity: 1 }],
            shipping: { street1: '', country: '' },
            billing: { street1: 'calle 1', country: 'EC', postCode: '170000' },
            customParameters: { base0: 0, baseImp: 1, iva: 0.12 },
            extra: {
              bill: {
                email: s.email,
                identificationDocId: s.doc || '',
                identificationDocType: 'IDCARD',
                lastName: s.lastName,
                name: s.name,
                secondName: '',
              },
              voucher: { email: s.email, confirmEmail: s.email, offer: !1 },
              phone: [{ number: s.phone, typePhone: 'MOBILE' }],
              rooms: [{ guests: [{ first_name: s.name, last_name: s.lastName }] }],
              language: 'es',
              user: { comment: '', email: s.email, phone: s.phone },
              partner: { partner_order_id: '', comment: '', amount_sell_b2b2c: '' },
              payment_type: {
                type: 'deposit',
                amount: '',
                currency_code: 'USD',
                is_need_cvc: !1,
                is_need_credit_card_data: !1,
              },
            },
          };
          const c = (0, C.useState)(l);
          const o = (0, N.Z)(c, 2);
          const u = o[0];
          const d = o[1];
          return (
            (0, C.useEffect)(() => {
              (0, J.zk)().then((e) => {
                d((s) => Ce(Ce({}, s), {}, { customer: Ce(Ce({}, s.customer), {}, { ip: e }) }));
              });
            }, [d]),
            (0, C.useEffect)(() => {
              if (a && a.shopping) {
                let e = 0;
                let s = 0;
                const t = a.shopping.map(
                  (t) => (
                    (e += t.subtotal),
                    (s += t.iva),
                    {
                      name: t.item_name || '',
                      description: 'Reserva de '
                        .concat(t.item_name, ' en ')
                        .concat(t.name, ' por ')
                        .concat(t.night === 1 ? 'una noche' : ''.concat(t.night, ' noches'), ', fecha de inicio: ')
                        .concat(g.Z.unix(t.checkin).format('dddd DD [de] MMMM [del] YYYY'), ' hasta ')
                        .concat(g.Z.unix(t.checkout).format('dddd DD [de] MMMM [del] YYYY')),
                      price: Number(t.total.toFixed(2)),
                      quantity: t.night,
                    }
                  ),
                );
                d((a) => Ce(Ce({}, a), {}, { cart: t, customParameters: { base0: 0, baseImp: e, iva: s } }));
              }
            }, [a, d]),
            { initValue: u, shopping: a, dispatch: i, payment: n }
          );
        })();
        const s = e.initValue;
        const t = e.shopping;
        const a = e.dispatch;
        const n = (0, C.useState)(!1);
        const i = (0, N.Z)(n, 2);
        const l = i[0];
        const c = i[1];
        const u = (0, C.useState)(!1);
        const x = (0, N.Z)(u, 2);
        const M = x[0];
        const w = x[1];
        const j = (0, C.useState)(!1);
        const L = (0, N.Z)(j, 2);
        const p = L[0];
        const f = L[1];
        const D = (0, C.useState)(!0);
        const y = (0, N.Z)(D, 2);
        const b = y[0];
        const v = y[1];
        const A = (0, d.s0)();
        (0, C.useEffect)(() => {
          (t.total && t.total !== 0) || A('/client/shopping-cart', { replace: !0 });
        }, [t.total, A]);
        const S = function () {
          f(!0),
            setTimeout(() => {
              v(!1);
            }, 4e3);
        };
        return (0, o.jsxs)('div', {
          children: [
            (0, o.jsx)(m.J9, {
              initialValues: s,
              onSubmit(e, s) {
                if (((0, T.Z)(s), !e.acceptConditions))
                  return h().fire(
                    'No se puede continuar con el proceso',
                    'Para continuar con la compra debes aceptar los términos y condiciones',
                    'info',
                  );
                let n;
                let i = t.total || 0;
                l &&
                  i !== 0 &&
                  ((i += 42),
                  (n = e.cart) === null ||
                    void 0 === n ||
                    n.push({
                      name: 'Tarjeta de asistencia',
                      description: 'Tarjeta de asistencia del viajero',
                      price: 42,
                      quantity: 1,
                    }));
                (e.amount = Number(i.toFixed(2))),
                  a(
                    (function (e) {
                      return (function () {
                        const s = (0, Y.Z)(
                          _().mark(function s(t, a) {
                            let n;
                            let i;
                            let r;
                            let l;
                            let c;
                            let o;
                            let u;
                            let d;
                            let x;
                            return _().wrap((s) => {
                              for (;;)
                                switch ((s.prev = s.next)) {
                                  case 0:
                                    if (
                                      ((n = a()), (i = n.shopping.shopping), (r = n.api.services.list), e.amount !== 0)
                                    ) {
                                      s.next = 3;
                                      break;
                                    }
                                    return s.abrupt(
                                      'return',
                                      h().fire({
                                        title: 'No se puede procesar la solicitud',
                                        text: 'El monto cargado a tu factura es de $ 0.00',
                                        icon: 'error',
                                      }),
                                    );
                                  case 3:
                                    if (
                                      (t(re('checkout')),
                                      (l = r.find((e) => {
                                        const s = e.name;
                                        const t = e.api;
                                        return (
                                          s === 'Hoteles' &&
                                          (t == null ? void 0 : t.name.toLocaleLowerCase()) === 'Ratehawk'.toLowerCase()
                                        );
                                      })),
                                      localStorage.setItem('apiService', JSON.stringify(l)),
                                      (c = { hashError: !1, err: [] }),
                                      (o = []),
                                      !(i && i.length > 0))
                                    ) {
                                      s.next = 19;
                                      break;
                                    }
                                    (u = _().mark(function e(s) {
                                      let a;
                                      let n;
                                      let r;
                                      return _().wrap((e) => {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                !l ||
                                                i[s].service.name !== 'Hoteles' ||
                                                i[s].service.api.toLocaleLowerCase() !== 'Ratehawk'.toLocaleLowerCase()
                                              ) {
                                                e.next = 18;
                                                break;
                                              }
                                              return (
                                                (e.next = 3),
                                                ce(String(i[s].book_hash), l, (e) => {
                                                  const a = e.err;
                                                  const n = e.msg;
                                                  se.log({
                                                    title: 'Error al crear la reserva en la habitación '
                                                      .concat(i[s].name, '\n                  en el hotel ')
                                                      .concat(i[s].item_name),
                                                    description: n,
                                                    code: a,
                                                  }),
                                                    (c.hashError = !0),
                                                    c.err.push(a),
                                                    t((0, X.Eq)(i[s]));
                                                }).then((e) => (e == null ? void 0 : e.data.data))
                                              );
                                            case 3:
                                              if (!(a = e.sent) || !a.data) {
                                                e.next = 18;
                                                break;
                                              }
                                              return (e.next = 7), K(a.data);
                                            case 7:
                                              if ((n = e.sent)) {
                                                e.next = 13;
                                                break;
                                              }
                                              return (
                                                t(re('error')),
                                                e.abrupt('return', {
                                                  v: h().fire({
                                                    title: 'No se puede procesar la solicitud',
                                                    text: 'No se pudo verificar el método de pago en el proveedor del servicio',
                                                    icon: 'error',
                                                  }),
                                                })
                                              );
                                            case 13:
                                              o.push(n),
                                                (r = ne(ne({}, a.data), {}, { testMode: i[s].testMode })),
                                                se.log('id de orden aprobado ', r.partner_order_id),
                                                t((0, X.Jh)(ne(ne({}, i[s]), {}, { order: r }))),
                                                t(((u = r), { type: F.kw, payload: { aux: u } }));
                                            case 18:
                                            case 'end':
                                              return e.stop();
                                          }
                                        let u;
                                      }, e);
                                    })),
                                      (d = 0);
                                  case 11:
                                    if (!(d < i.length)) {
                                      s.next = 19;
                                      break;
                                    }
                                    return s.delegateYield(u(d), 't0', 13);
                                  case 13:
                                    if (((x = s.t0), (0, R.Z)(x) !== 'object')) {
                                      s.next = 16;
                                      break;
                                    }
                                    return s.abrupt('return', x.v);
                                  case 16:
                                    d++, (s.next = 11);
                                    break;
                                  case 19:
                                    o.length > 0 && (localStorage.setItem('paymentType', JSON.stringify(o)), t(le(e))),
                                      c.hashError &&
                                        (t(re('error')),
                                        h().fire({
                                          title: 'No se puede procesar tu solicitud de reserva',
                                          text: 'Algunos de las habitaciones no se encuentran disponibles para realizar la reserva,\n          por tal motivo se procedió a eliminarlas de tu carrito, agrega nuevamente las habitaciones que desees reservar.\n          Si el problema persiste contacta al administrador del sistema con el código de error "'.concat(
                                            c.err,
                                            '"',
                                          ),
                                          icon: 'error',
                                        }));
                                  case 21:
                                  case 'end':
                                    return s.stop();
                                }
                            }, s);
                          }),
                        );
                        return function (e, t) {
                          return s.apply(this, arguments);
                        };
                      })();
                    })(
                      (function (e) {
                        for (let s = 1; s < arguments.length; s++) {
                          var t = arguments[s] != null ? arguments[s] : {};
                          s % 2
                            ? ge(Object(t), !0).forEach((s) => {
                                (0, I.Z)(e, s, t[s]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : ge(Object(t)).forEach((s) => {
                                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
                              });
                        }
                        return e;
                      })({}, e),
                    ),
                  );
              },
              enableReinitialize: !0,
              validationSchema: je,
              children(e) {
                const s = e.setValues;
                const t = e.values;
                const a = e.errors;
                return (0, o.jsx)(m.l0, {
                  children: (0, o.jsxs)('div', {
                    className: 'flex flex-col md:flex-row md:justify-between gap-6 text-white ',
                    children: [
                      (0, o.jsxs)('div', {
                        className: 'flex flex-col gap-4 md:w-[45%]',
                        children: [
                          (0, o.jsx)(k, {}),
                          (0, o.jsx)(ye, {}),
                          (0, o.jsx)(O, { values: t }),
                          (0, o.jsx)(Ne, { setValues: s, values: t, errors: a }),
                        ],
                      }),
                      (0, o.jsxs)('div', {
                        className: 'flex flex-col gap-4 order-2 w-full md:w-[45%] mt-10',
                        children: [
                          (0, o.jsx)(Me, {}),
                          (0, o.jsx)(z, {}),
                          (0, o.jsxs)('div', {
                            className: 'flex gap-4 items-center ',
                            children: [
                              (0, o.jsx)('div', {
                                className: 'form-control mt-4',
                                children: (0, o.jsx)('label', {
                                  className: 'block w-fit label cursor-pointer',
                                  children: (0, o.jsx)(m.gN, {
                                    type: 'checkbox',
                                    className: 'toggle toggle-primary',
                                    name: 'acceptConditions',
                                  }),
                                }),
                              }),
                              (0, o.jsx)('span', {
                                className: 'text-sm cursor-pointer',
                                onClick() {
                                  return w(!0);
                                },
                                children: 'Términos y condiciones',
                              }),
                            ],
                          }),
                          (0, o.jsxs)('div', {
                            className: 'flex gap-4 justify-between',
                            children: [
                              (0, o.jsx)('button', {
                                type: 'submit',
                                className: 'btn btn__gold w-[48%] mt-10',
                                onClick() {
                                  if (Object.keys(a).length !== 0)
                                    return h().fire(
                                      'No se puede continuar con el proceso',
                                      'Error de formulario, revisa todos los campos obligatorios',
                                      'warning',
                                    );
                                  c(!0), t.acceptConditions && S();
                                },
                                children: 'Pagar con asistencia',
                              }),
                              (0, o.jsx)('button', {
                                type: 'submit',
                                className: 'btn btn__gold w-[48%] mt-10',
                                onClick() {
                                  if (Object.keys(a).length !== 0)
                                    return h().fire(
                                      'No se puede continuar con el proceso',
                                      'Error de formulario, revisa todos los campos obligatorios',
                                      'warning',
                                    );
                                  c(!1), t.acceptConditions && S();
                                },
                                children: 'Pagar sin asistencia',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              },
            }),
            (0, o.jsx)(me, { openModal: p, loader: b, setOpenModal: f }),
            (0, o.jsx)(be, { openModal: M, setOpenModalTermsAndConditions: w }),
          ],
        });
      };
      const Ae = function () {
        const e = (0, r.v9)((e) => e.client.payment).state;
        return (0, o.jsxs)('div', {
          className: 'bg-gradient-body animate__animated animate__fadeIn',
          children: [
            (0, o.jsx)(w, {}),
            (0, o.jsxs)('div', {
              className: 'min-h-[100vh]',
              children: [
                (0, o.jsx)(d.j3, {}),
                (0, o.jsx)('div', {
                  children:
                    e === 'checkout' &&
                    (0, o.jsx)('div', {
                      className:
                        'fixed bottom-0 left-0 right-0 top-0 m-auto bg-[#000000ce] z-40 grid place-content-center',
                      children: (0, o.jsxs)('div', {
                        className: 'flex flex-col max-w-[400px] gap-2 justify-center items-center',
                        children: [
                          (0, o.jsx)('span', {
                            className: 'text-white block text-center text-xl',
                            children: 'Se encuentra en un proceso de pago',
                          }),
                          (0, o.jsx)('strong', {
                            className: 'cursor-pointer text-primary block text-center',
                            children: 'Sera redireccionado en un momento',
                          }),
                          (0, o.jsx)('small', {
                            className: 'text-white block text-center',
                            children: 'O recargue la pagina para cancelar el pago',
                          }),
                          (0, o.jsx)(c.s_, { bg: 'bg-primary' }),
                        ],
                      }),
                    }),
                }),
              ],
            }),
            (0, o.jsx)(c.$_, {}),
          ],
        });
      };
      const Se = t(84623);
      const Ee = t(69167);
      const Ie = t(507);
      const Te = function () {
        return (0, o.jsx)('div', {
          className: 'p-5 flex justify-center',
          children: (0, o.jsxs)('div', {
            className: 'w-full xl:w-[1200px] mt-8',
            children: [
              (0, o.jsx)('span', { className: 'font-medium text-xl text-white ', children: 'Promociones' }),
              (0, o.jsx)('div', { className: 'mt-8', children: (0, o.jsx)(f, {}) }),
            ],
          }),
        });
      };
      const ze = t(14375);
      const ke = t(10615);
      const Oe = t(83745);
      const Ye = function () {
        const e = (0, r.I0)();
        const s = (0, r.v9)((e) => e.history).list;
        (0, C.useEffect)(() => {
          s ||
            e(
              (function () {
                const e = (0, Y.Z)(
                  _().mark(function e(s, t) {
                    let a;
                    let n;
                    let i;
                    let r;
                    let l;
                    return _().wrap((e) => {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t().auth.uid),
                              (e.next = 3),
                              (0, H.JE)((0, B.X2)({ method: 'get', url: '/sales-history/'.concat(a) }), 'getHistory')
                            );
                          case 3:
                            (n = e.sent),
                              (i = n.status),
                              (r = n.data),
                              i === 200 &&
                                ((l = r.map((e) => e.shopping)),
                                s(((c = l.flat()), { type: ze.L, payload: { list: c } })));
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                      let c;
                    }, e);
                  }),
                );
                return function (s, t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        }, [s]);
        const t = (0, H.WH)({ area: 'getHistory' }).promiseInProgress;
        return (0, o.jsx)('div', {
          className: 'p-5 flex justify-center',
          children: (0, o.jsxs)('div', {
            className: 'w-full xl:w-[1200px] mt-8',
            children: [
              (0, o.jsx)('span', { className: 'font-medium text-xl text-white ', children: 'Historial' }),
              (0, o.jsx)('div', {
                className: 'my-10 ',
                children: t
                  ? (0, o.jsx)(Oe.i, {})
                  : (0, o.jsx)('div', {
                      className: 'flex flex-col gap-4',
                      children:
                        s && s.length > 0
                          ? s.map((e, s) => {
                              const t = e.img;
                              const a = e.night;
                              const n = e.name;
                              const i = e.description;
                              const r = e.service;
                              const l = e.item_name;
                              const c = e.subtotal;
                              const u = e.iva;
                              const d = e.discount;
                              const x = e.total;
                              const m = e.checkin;
                              const M = e.errorBooking;
                              return (
                                e &&
                                (0, o.jsxs)(
                                  'div',
                                  {
                                    className:
                                      'bg-grandient-primary mt-2 p-4 rounded-xl flex flex-col md:flex-row gap-4',
                                    children: [
                                      (0, o.jsx)('div', {
                                        className: 'w-full md:w-[350px] lg:w-[450px]',
                                        children: (0, o.jsx)(ke.lr, {
                                          emulateTouch: !0,
                                          showArrows: !1,
                                          showThumbs: !1,
                                          infiniteLoop: !0,
                                          showStatus: !1,
                                          children:
                                            t &&
                                            t.map((e, s) =>
                                              (0, o.jsx)(
                                                'div',
                                                {
                                                  children: (0, o.jsx)('img', {
                                                    src: e.replace('{size}', 'x500'),
                                                    alt: 'hotel',
                                                    className: 'h-[240px] object-cover rounded-xl',
                                                  }),
                                                },
                                                s,
                                              ),
                                            ),
                                        }),
                                      }),
                                      (0, o.jsxs)('div', {
                                        className:
                                          'text-gray-700 text-sm gap-4 flex flex-col md:flex-row w-full justify-between',
                                        children: [
                                          (0, o.jsx)('div', {
                                            className: 'md:order-2 h-fit',
                                            children: (0, o.jsxs)('div', {
                                              className: 'bg-base-200 rounded-xl p-4 flex flex-col items-end ',
                                              children: [
                                                (0, o.jsxs)('span', {
                                                  className: 'block',
                                                  children: ['Precio: USD ', c && c.toFixed(2)],
                                                }),
                                                (0, o.jsxs)('span', {
                                                  className: 'block',
                                                  children: ['Impuestos: USD ', u && u.toFixed(2)],
                                                }),
                                                (0, o.jsxs)('span', {
                                                  className: 'block',
                                                  children: ['Ahorro x membresía: USD', ' ', d && d.toFixed(2)],
                                                }),
                                                (0, o.jsxs)('span', {
                                                  className: 'block font-bold text-accent',
                                                  children: ['Total: USD ', x && x.toFixed(2)],
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, o.jsxs)('div', {
                                            className: 'flex flex-col md:order-1',
                                            children: [
                                              (0, o.jsx)('small', {
                                                className: 'block',
                                                children: g.Z.unix(Number(m)).format('DD [de] MMMM [del] yyyy'),
                                              }),
                                              n &&
                                                (0, o.jsxs)('span', {
                                                  className: 'text-lg font-bold block',
                                                  children: ['Estancia ', n],
                                                }),
                                              (0, o.jsx)('span', { className: 'text-lg block', children: l }),
                                              (0, o.jsx)('span', { className: 'text-md block', children: i }),
                                              (0, o.jsx)('span', { className: 'text-md block', children: r && r.name }),
                                              (0, o.jsx)('div', {
                                                className: 'mt-8 flex gap-4',
                                                children: (0, o.jsx)('span', {
                                                  className: 'font-bold block',
                                                  children: ''.concat(a, a && a === 1 ? ' noche' : ' noches'),
                                                }),
                                              }),
                                              (0, o.jsx)('div', {
                                                children:
                                                  M &&
                                                  (0, o.jsx)('p', {
                                                    className: 'block text-sm text-red-700',
                                                    children: M,
                                                  }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  s,
                                )
                              );
                            })
                          : (0, o.jsx)('div', {
                              className: 'grid min-h-[60vh] place-content-center',
                              children: (0, o.jsx)('span', {
                                className: 'text-lg block text-center text-gray-300',
                                children: 'No se encontraron artículos en tu historial de viajes',
                              }),
                            }),
                    }),
              }),
            ],
          }),
        });
      };
      const Qe = function () {
        return (0, o.jsx)('div', {
          className: 'p-5 flex justify-center',
          children: (0, o.jsx)('div', {
            className: 'w-full xl:w-[1200px] mt-8',
            children: (0, o.jsxs)('span', {
              className: 'font-medium text-xl text-white ',
              children: [
                (0, o.jsx)('span', {
                  className: 'block text-center text-4xl',
                  children: 'Estaremos gustosos en ayudarte',
                }),
                (0, o.jsxs)('div', {
                  className: 'mt-36',
                  children: [
                    (0, o.jsxs)('div', {
                      className: 'mt-8 flex gap-5 items-center md:justify-around flex-col md:flex-row',
                      children: [
                        (0, o.jsxs)('div', {
                          className: 'w-[150px] h-[150px]',
                          children: [
                            (0, o.jsx)('img', {
                              className: 'object-cover w-full drop-shadow-xl block',
                              src: 'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBmaWxsPSIjQ0NDNDhCIiBkYXRhLW5hbWU9IkNhcGEgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQuOTkgNDQuOTkiPjxwYXRoIGQ9Ik0zMC43MywzOC42NmMtMS4zNS0xLjM1LTIuODQtMi41NC00LjI1LTMuODNhMS43OSwxLjc5LDAsMCwxLS4xNC0uMTNBNC43MSw0LjcxLDAsMCwwLDIxLjkxLDMzYy0xLjY5LjE0LTMuNCwwLTUuMDksMC0uMTksMC0uNDMuMDYtLjUxLS4xNXMuMTQtLjI5LjI2LS40MWMxLjExLTEuMTMsMi4yNC0yLjI2LDMuMzUtMy40YTEuMzEsMS4zMSwwLDAsMSwxLS4zNmMyLjUyLDAsNS4wNS0uMDYsNy41NywwQTMuNTIsMy41MiwwLDAsMCwzMi4yNiwyNWMtLjEtMi44LDAtNS42LDAtOC40LDAtLjc0LjEzLS44MS44Mi0uNTNhNC4wNSw0LjA1LDAsMCwxLDIuNTYsMy44M2MwLDMsMCw2LjA3LDAsOS4xMWE0LDQsMCwwLDEtMy4zNCw0Yy0uNjEuMTItLjgyLjM0LS43NSwxLC4xMiwxLjIuMTcsMi40MS4yNiwzLjYyYTEuMjUsMS4yNSwwLDAsMS0uMjgsMVoiLz48cGF0aCBkPSJNNy44LDEyLjQxYTQuMiw0LjIsMCwwLDEsNC4yOC0zLjIzSDI2YTQuMTUsNC4xNSwwLDAsMSw0LjM4LDQuMjJjLjA2LDMsLjA2LDYuMDcsMCw5LjExQTQuMTgsNC4xOCwwLDAsMSwyNiwyNi43MmMtMiwwLTQuMTEsMC02LjE3LDBhMS44NywxLjg3LDAsMCwwLTEuMzcuNTFjLTEuNzgsMS41Ni0zLjU3LDMuMDgtNS4zNiw0LjYyLS4zMS4yNy0uNjQuNTMtMS4wOC4zMnMtLjQ1LS42My0uNDItMWMuMDktMS4yNy4xOC0yLjU0LjI2LTMuODEsMC0uMjksMC0uNTQtLjM4LS42QTQuMzksNC4zOSwwLDAsMSw3LjgsMjMuNVptNS40MiwxNy4zNEMxNC45LDI4LjMxLDE2LjQ1LDI3LDE4LDI1LjY1YTEuNTgsMS41OCwwLDAsMSwxLjE1LS40Mmg2LjY5YTIuNzEsMi43MSwwLDAsMCwzLTNxMC00LjMyLDAtOC42NmEyLjY2LDIuNjYsMCwwLDAtMy0yLjk0SDEyLjJhMi43MSwyLjcxLDAsMCwwLTIuOTUsM3EwLDQuMjMsMCw4LjQ3YzAsMiwxLjA1LDMuMDgsMy4xLDMuMS45MywwLDEuMTMuMiwxLjA5LDEuMTRTMTMuMywyOC41MSwxMy4yMiwyOS43NVoiLz48cGF0aCBkPSJNMTkuMDgsMTYuMjhIMTQuMjVjLS41MSwwLTEtLjA1LTEtLjY4cy4zMi0uOCwxLS44cTQuODcsMCw5LjczLDBjLjY3LDAsMS4wOC4zLDEsLjc3cy0uNDguNzItMSwuNzJaIi8+PHBhdGggZD0iTTE3LjU5LDE5LjczYy0xLjE0LDAtMi4yOSwwLTMuNDQsMC0uNSwwLS45MS0uMTQtLjkyLS43MnMuNC0uNzcuOS0uNzdIMjFjLjUsMCwuODkuMTkuOTQuNzRzLS4zNS43NC0xLC43NFoiLz48L3N2Zz4=',
                              alt: 'ChatIcon',
                            }),
                            (0, o.jsx)('span', {
                              className: 'block text-center text-lg',
                              children: 'Chatea con nosotros',
                            }),
                          ],
                        }),
                        (0, o.jsxs)('div', {
                          className: 'w-[150px] h-[150px]',
                          children: [
                            (0, o.jsx)('img', {
                              className: 'object-cover w-full drop-shadow-xl block',
                              src: 'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBmaWxsPSIjQ0NDNDhCIiBkYXRhLW5hbWU9IkNhcGEgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQuOTkgNDQuOTkiPjxwYXRoIGQ9Ik0yNy41OSwzNi4xOGExMC4wOCwxMC4wOCwwLDAsMS0yLjQ2LS42NywxNS4xMSwxNS4xMSwwLDAsMS00LjItMi43MywyNS4zNSwyNS4zNSwwLDAsMS01LjM0LTYuOTIsMjQuNjUsMjQuNjUsMCwwLDEtMi4zNy02LDE2LjA2LDE2LjA2LDAsMCwxLS41LTQuNTgsOC43OSw4Ljc5LDAsMCwxLDEuNDktNC44NCw3LjM2LDcuMzYsMCwwLDEsMS4xMS0xLjE5LDMuNiwzLjYsMCwwLDEsMi4wNS0uNzVsLjg2LS4xNkExLjA2LDEuMDYsMCwwLDEsMTkuNSw5Yy41NywxLjQ3LDEuMTIsMi45NCwxLjcxLDQuNDFhMiwyLDAsMCwxLS4xOCwybC0uMTUuMjZhMi43LDIuNywwLDAsMS0uOTMsMSwyLjY3LDIuNjcsMCwwLDAtMS4xNywyLjI1LDcuMjksNy4yOSwwLDAsMCwuNzQsMy4xNUExOC4zNiwxOC4zNiwwLDAsMCwyMiwyNi4yNSw1LjkyLDUuOTIsMCwwLDAsMjQuMywyOC4xLDIuNzEsMi43MSwwLDAsMCwyNi43MiwyOGExLjUsMS41LDAsMCwxLC44My0uMiw1LjQyLDUuNDIsMCwwLDEsMS40NS4wOSwxLjc3LDEuNzcsMCwwLDEsLjgyLjU3YzEuMDUsMS4zLDIuMSwyLjU5LDMuMTUsMy45YTEsMSwwLDAsMSwwLDEuMzdjLS4zOS40Ni0uNzkuOTEtMS4xNywxLjM5YTMuMDUsMy4wNSwwLDAsMS0xLjYyLjg4Yy0uMy4wOS0uNjIuMTQtLjkzLjJaIi8+PHBhdGggZD0iTTMzLDIyLjNhMTAuNjQsMTAuNjQsMCwwLDEtLjMyLDIuMzMuNjIuNjIsMCwwLDEtLjc1LjUuNjEuNjEsMCwwLDEtLjQ2LS43Nyw4Ljg3LDguODcsMCwwLDAsLjI1LTIuNDYsOC4yMiw4LjIyLDAsMCwwLTUuNjQtNy40NWwtLjQ2LS4xNmEuNi42LDAsMCwxLS4zOC0uNzcuNjEuNjEsMCwwLDEsLjc4LS4zOSw5LjE0LDkuMTQsMCwwLDEsMi41NiwxLjEyLDkuNDQsOS40NCwwLDAsMSw0LjE4LDUuOTRBMTAuODMsMTAuODMsMCwwLDEsMzMsMjIuM1oiLz48cGF0aCBkPSJNMzAuNTgsMjIuMjJBNS40Niw1LjQ2LDAsMCwxLDMwLjQxLDI0Yy0uMTMuNDgtLjUxLjY5LS44OS41MWEuNjIuNjIsMCwwLDEtLjMzLS43Myw3Ljc1LDcuNzUsMCwwLDAsLjE4LTEuNTksNS44Nyw1Ljg3LDAsMCwwLTMuOTMtNS40NGMtLjE2LDAtLjMyLS4xLS40Ni0uMTZhLjU5LjU5LDAsMCwxLS4zNi0uNzYuNi42LDAsMCwxLC43Ni0uNEE3LDcsMCwwLDEsMjgsMTYuNzdhNy4xLDcuMSwwLDAsMSwyLjU0LDQuNzFBNi4wOSw2LjA5LDAsMCwxLDMwLjU4LDIyLjIyWiIvPjxwYXRoIGQ9Ik0yOC4yNywyMi4yMmE0LDQsMCwwLDEtLjE3LDEuMjQuNjEuNjEsMCwwLDEtLjQ5LjQ2QS42Mi42MiwwLDAsMSwyNywyMy43YS41My41MywwLDAsMS0uMTItLjQ4LDQuMTMsNC4xMywwLDAsMCwwLTEuNzVBMy40NSwzLjQ1LDAsMCwwLDI0LjcsMTlsLS4zMy0uMTNhLjYuNiwwLDAsMS0uMzYtLjc1LjYzLjYzLDAsMCwxLC43Ni0uNDEsMy41NiwzLjU2LDAsMCwxLC44OS4zNEE0Ljc1LDQuNzUsMCwwLDEsMjguMjcsMjIuMjJaIi8+PHBhdGggZD0iTTI0LjYzLDIyLjQ0YTEuMSwxLjEsMCwwLDAtLjc5LTEuMjkuNjYuNjYsMCwwLDEtLjQ1LS40OS42MS42MSwwLDAsMSwuNzktLjcsMi40MiwyLjQyLDAsMCwxLDEuNjUsMi44OS42Mi42MiwwLDAsMS0uNzQuNDUuNTkuNTksMCwwLDEtLjQ2LS42NFoiLz48L3N2Zz4=',
                              alt: 'CallIcon',
                            }),
                            (0, o.jsx)('span', { className: 'block text-center text-lg', children: 'LLámanos' }),
                          ],
                        }),
                        (0, o.jsxs)('div', {
                          className: 'w-[150px] h-[150px]',
                          children: [
                            (0, o.jsx)('img', {
                              className: 'object-cover w-full drop-shadow-xl block',
                              src: 'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBmaWxsPSIjQ0NDNDhCIiBkYXRhLW5hbWU9IkNhcGEgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQuOTkgNDQuOTkiPjxwYXRoIGQ9Ik0xMi45MiwzNS4wN2ExLjYyLDEuNjIsMCwwLDEtMS4xMi0xLjIyLDEuNDEsMS40MSwwLDAsMSwwLS42OCwxNSwxNSwwLDAsMSwxLjIzLTMuMDksNy41NCw3LjU0LDAsMCwxLDUuNDMtMy42MmwuMjEsMGExLjE2LDEuMTYsMCwwLDEsLjg4LjE5LDQuNSw0LjUsMCwwLDAsMi4yNi44OC43My43MywwLDAsMSwuMzcuMTYsMS42NCwxLjY0LDAsMCwwLDIuNDktLjQ0LDIsMiwwLDAsMSwuNDYtLjQ2LDEuNiwxLjYsMCwwLDEsMS40OS0uMjYsNy40NSw3LjQ1LDAsMCwxLDUuNDcsNCwxMi4yOCwxMi4yOCwwLDAsMSwxLDIuOTRBMS40NCwxLjQ0LDAsMCwxLDMyLjMzLDM1bC0uMjcuMTJaIi8+PHBhdGggZD0iTTI3LjYyLDE4LjQ3QTkuMzgsOS4zOCwwLDAsMSwyNS44NSwyNGE1LjkxLDUuOTEsMCwwLDEtMS4xMywxLjE2LjIzLjIzLDAsMCwxLS4zNSwwLDEuNjMsMS42MywwLDAsMC0yLjU3LjVjLS4wOS4xNy0uMTcuMjEtLjM1LjE1YTQuNzksNC43OSwwLDAsMS0yLjA2LTEuNDksOC44NCw4Ljg0LDAsMCwxLTEuOTItNC4zOSw3LjUsNy41LDAsMCwxLC4yOC0zLjgyQTQuODksNC44OSwwLDAsMSwyMiwxMi43MmE1LDUsMCwwLDEsNS40LDMuOTNsLjE1LjcyQTgsOCwwLDAsMSwyNy42MiwxOC40N1oiLz48cGF0aCBkPSJNMjIuNDQsOS45MmE2Ljc0LDYuNzQsMCwwLDEsNC45MSwxLjg3LDYuOTEsNi45MSwwLDAsMSwyLDMuOCw0LjM2LDQuMzYsMCwwLDEsLjA3LDEuMDguNzEuNzEsMCwwLDAsLjE1LjQxLDEuMSwxLjEsMCwwLDAsLjc3LjQ2LDEuOSwxLjksMCwwLDEsMS40OSwxLjY5LDIuMDgsMi4wOCwwLDAsMS0xLDIuMjEsMS43LDEuNywwLDAsMS0uNzkuMjRjLS4xNCwwLS4xOS4xLS4yOS4xOC0uNDEuMzctLjMxLjg2LS4zNSwxLjMyYTMuMiwzLjIsMCwwLDEtLjI2LDEsMi44MSwyLjgxLDAsMCwxLTEuNDksMS4zOSwxNSwxNSwwLDAsMS0yLjYyLjgxbC0uNDMuMTFhLjg4Ljg4LDAsMCwwLS42Ny40NC44Ni44NiwwLDAsMS0xLjIzLjE2LjkuOSwwLDAsMSwxLTEuNDkuNTUuNTUsMCwwLDAsLjQ1LjA4Yy44OS0uMjIsMS43OS0uNDMsMi42Ni0uNzFhMi4xMSwyLjExLDAsMCwwLDEuNjgtMi4xNmMwLS4xLDAtLjIsMC0uM2EuNTMuNTMsMCwwLDAtLjE2LS41MS44My44MywwLDAsMS0uMjMtLjY1YzAtLjg2LDAtMS43MSwwLTIuNTdhOC44NSw4Ljg1LDAsMCwxLDAtMSwxLDEsMCwwLDEsLjE1LS41NC41Ni41NiwwLDAsMCwuMDktLjU0LDUuODgsNS44OCwwLDAsMC0zLjc4LTQuNDMsNiw2LDAsMCwwLTguMSw0LjYxLjIyLjIyLDAsMCwwLDAsLjIxLDEuNTIsMS41MiwwLDAsMSwuMjgsMS4xNGMwLDEuMDgsMCwyLjE2LDAsMy4yNGEuODUuODUsMCwwLDEtLjkyLjg3LjczLjczLDAsMCwxLS43LS40NC4yOC4yOCwwLDAsMC0uMjctLjIsMi4xMywyLjEzLDAsMCwxLTEuODUtMi4zMywyLjA4LDIuMDgsMCwwLDEsMS41My0xLjgyLDEsMSwwLDAsMSwuMjQsMGMuMTcsMCwuMzEtLjA2LjM2LS4yM2EuNDMuNDMsMCwwLDEsMC0uMDdjLjMxLS4yLjI1LS41MS4yNi0uODFhNi4yNCw2LjI0LDAsMCwxLDIuMjQtNC42NUE3LjIxLDcuMjEsMCwwLDEsMjIuNDQsOS45MloiLz48L3N2Zz4=',
                              alt: 'AssistantIcon',
                            }),
                            (0, o.jsx)('span', {
                              className: 'block text-center text-lg',
                              children: 'Déjanos llamarte',
                            }),
                          ],
                        }),
                        (0, o.jsxs)('div', {
                          className: 'w-[150px] h-[150px]',
                          children: [
                            (0, o.jsx)('img', {
                              className: 'object-cover w-full drop-shadow-xl block',
                              src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ1IDQ1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NSA0NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNDQ0M0OEI7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjEuOCwzNkg2LjhjLTAuNiwwLTAuNiwwLTAuNi0wLjV2LTJjMC0wLjUsMC0wLjUsMC42LTAuNWgxLjljMC41LDAsMC41LDAsMC41LTAuNVYyM2MwLTAuNSwwLTAuNSwwLjUtMC42CgljMS0wLjEsMi4xLTAuMywzLjEtMC40YzAuNCwwLDAuNS0wLjIsMC41LTAuNWMwLTMuNiwwLTcuMywwLTEwLjljLTAuMS0wLjMsMC4xLTAuNiwwLjUtMC43YzAsMCwwLDAsMCwwYzMuNS0xLDctMiwxMC41LTMKCWMwLjItMC4xLDAuMy0wLjEsMC41LDBjMy4xLDEuMyw2LjMsMi42LDkuNSwzLjljMC4zLDAuMSwwLjUsMC40LDAuNCwwLjd2MjAuOWMwLDAuNiwwLDAuNiwwLjYsMC42aDEuOGMwLjMsMCwwLjQsMC4xLDAuNCwwLjQKCWMwLDAuOCwwLDEuNiwwLDIuNGMwLDAuMy0wLjEsMC4zLTAuNCwwLjNMMjEuOCwzNkwyMS44LDM2eiBNMjMuOCwyMC44VjkuMWMwLTAuNCwwLTAuNC0wLjQtMC4zYy0yLjcsMC44LTUuNCwxLjYtOC4xLDIuMwoJYy0wLjMsMC0wLjUsMC4zLTAuNCwwLjZjMCwwLDAsMCwwLDBjMCwzLjcsMCw3LjQsMCwxMS4xYzAsMC41LDAsMC41LTAuNSwwLjVjLTEuMSwwLjEtMi4yLDAuMy0zLjMsMC40Yy0wLjMsMC0wLjQsMC4xLTAuNCwwLjQKCWMwLDIuOCwwLDUuNiwwLDguNGMwLDAuMywwLjEsMC40LDAuNCwwLjRoMTJjMC42LDAsMC42LDAsMC42LTAuNUwyMy44LDIwLjh6IE0yNi4yLDEyLjRjMCwwLjIsMCwwLjUsMCwwLjhjMCwwLjIsMC4xLDAuMywwLjIsMC40CgljMCwwLDAsMCwwLDBjMC4zLDAuMSwwLjYsMC4xLDEsMC4yYzEuNywwLjQsMy41LDAuOCw1LjIsMS4yYzAuMywwLjEsMC40LDAsMC4zLTAuM2MwLTAuNCwwLTAuOCwwLTEuMmMwLTAuMi0wLjEtMC40LTAuMy0wLjQKCWMwLDAsMCwwLDAsMGwtNi4xLTEuNmMtMC4yLTAuMS0wLjMsMC0wLjMsMC4yUzI2LjEsMTIuMiwyNi4yLDEyLjRMMjYuMiwxMi40eiBNMzIuOSwyNS44YzAtMC4xLDAtMC4zLDAtMC40czAtMC4zLTAuMy0wLjMKCWMtMi0wLjItNC4xLTAuMy02LjEtMC41Yy0wLjMsMC0wLjMsMC4xLTAuMywwLjNjMCwwLjQsMCwwLjgsMCwxLjJzMCwwLjYsMC42LDAuNmwyLDAuMWwzLjksMC4yYzAuMiwwLDAuMy0wLjEsMC4yLTAuMwoJUzMyLjksMjYuMSwzMi45LDI1Ljh6IE0zMi45LDIxLjhMMzIuOSwyMS44YzAtMC4xLDAtMC4xLDAtMC4yYzAuMS0wLjMtMC4xLTAuNC0wLjQtMC41Yy0wLjgtMC4xLTEuNy0wLjItMi41LTAuNGwtMy41LTAuNQoJYy0wLjIsMC0wLjMsMC0wLjMsMC4zYzAsMC41LDAsMSwwLDEuNWMwLDAuMiwwLjEsMC4zLDAuNCwwLjRzMC43LDAuMSwxLDAuMWw1LjEsMC42YzAuMiwwLDAuMywwLDAuMy0wLjJTMzIuOSwyMi4xLDMyLjksMjEuOHoKCSBNMjYuMSwxNi44YzAsMC4zLDAsMC41LDAsMC44czAuMSwwLjMsMC4zLDAuM2w2LjIsMS4xYzAuMiwwLDAuMywwLDAuMy0wLjJjMC0wLjQsMC0wLjgsMC0xLjJzLTAuMS0wLjQtMC4zLTAuNWwtNi4xLTEuMgoJYy0wLjIsMC0wLjQsMC0wLjMsMC4yQzI2LjIsMTYuNCwyNi4xLDE2LjYsMjYuMSwxNi44eiBNMjkuNiwzMC45aDMuMWMwLjIsMCwwLjMsMCwwLjMtMC4zYy0wLjEtMC40LTAuMS0wLjgsMC0xLjIKCWMwLTAuMy0wLjEtMC40LTAuMy0wLjRjLTEtMC4xLTIuMSwwLTMuMS0wLjFzLTItMC4xLTMtMC4xYy0wLjIsMC0wLjQsMC4xLTAuNCwwLjNjMCwwLjQsMCwwLjksMCwxLjNzMC4xLDAuNCwwLjQsMC40CglDMjcuNiwzMC45LDI4LjYsMzAuOSwyOS42LDMwLjl6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi41LDEyLjZjMCwxLjEsMCwxLjEtMSwxLjJjLTAuNywwLjEtMC43LDAuMS0wLjctMC42di0xYzAtMC4yLDAtMC4zLDAuMi0wLjRsMS4yLTAuMmMwLjIsMCwwLjMsMCwwLjMsMC4yCglTMjIuNSwxMi4zLDIyLjUsMTIuNnoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjYsMTdjMCwwLjIsMCwwLjQsMCwwLjZzLTAuMSwwLjUtMC40LDAuNXMtMC43LDAuMS0xLjEsMC4xcy0wLjMtMC4xLTAuMy0wLjN2LTEuNWMwLTAuMSwwLjEtMC4zLDAuMi0wLjMKCWMwLDAsMCwwLDAsMGwxLjMtMC4yYzAuMiwwLDAuMiwwLjEsMC4yLDAuMkwyMi42LDE3TDIyLjYsMTd6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi41LDIxLjRjMCwxLjEsMCwxLjEtMSwxLjFjLTAuOCwwLTAuNywwLjEtMC43LTAuNmMwLTAuNCwwLTAuNywwLTEuMWMwLTAuMiwwLjEtMC4zLDAuMi0wLjNjMCwwLDAsMCwwLDAKCWMwLjQsMCwwLjgtMC4xLDEuMi0wLjFjMC4yLDAsMC4yLDAuMSwwLjIsMC4yVjIxLjR6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi42LDI1LjhjMCwxLDAsMS0xLDEuMWMtMC43LDAtMC43LDAtMC43LTAuN2MwLTAuNCwwLTAuNywwLTFjMC0wLjIsMC4xLTAuMywwLjItMC40YzAsMCwwLjEsMCwwLjEsMAoJYzAuNCwwLDAuNywwLDEuMS0wLjFzMC40LDAuMSwwLjQsMC40UzIyLjYsMjUuNiwyMi42LDI1Ljh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi42LDMwLjJjMCwwLjIsMCwwLjQsMCwwLjdzLTAuMSwwLjQtMC40LDAuNGgtMS4xYy0wLjIsMC0wLjMtMC4xLTAuMy0wLjN2LTEuNWMwLTAuMiwwLjEtMC4zLDAuMy0wLjMKCWMwLjQsMCwwLjgsMCwxLjEtMC4xczAuNCwwLjEsMC40LDAuNFMyMi42LDMwLDIyLjYsMzAuMnoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTMuMmMwLDEsMCwxLTEsMS4yYy0wLjcsMC4xLTAuNywwLjEtMC43LTAuNmMwLTAuMywwLTAuNiwwLTFjMC0wLjIsMC4xLTAuMywwLjMtMC40YzAsMCwwLDAsMCwwbDEuMS0wLjIKCWMwLjIsMCwwLjMsMCwwLjMsMC4yTDE5LjMsMTMuMnoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LjYsMTcuNmMwLTAuOSwwLTEsMC45LTEuMWMwLjgtMC4xLDAuOC0wLjMsMC44LDAuNmMwLDAuMywwLDAuNywwLDFjMCwwLjItMC4xLDAuMy0wLjIsMC4zYzAsMCwwLDAsMCwwCglsLTEuMiwwLjJjLTAuMiwwLTAuMi0wLjEtMC4yLTAuM1YxNy42eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkuMywyMS43YzAsMSwwLDEtMSwxLjFjLTAuNywwLjEtMC43LDAuMS0wLjctMC42YzAtMC40LDAtMC43LDAtMWMwLTAuMiwwLjEtMC4zLDAuMi0wLjRjMCwwLDAuMSwwLDAuMSwwCglsMS4xLTAuMWMwLjIsMCwwLjIsMC4xLDAuMiwwLjJTMTkuMywyMS41LDE5LjMsMjEuN3oiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMjZ2MC44YzAsMC4yLTAuMSwwLjMtMC4yLDAuM2wtMSwwYy0wLjIsMC0wLjQtMC4xLTAuNC0wLjNjMC0wLjUsMC0wLjksMC0xLjRjMC0wLjIsMC0wLjMsMC4yLTAuM2wxLDAKCWMwLjMsMCwwLjQsMC4xLDAuNCwwLjRTMTkuMywyNS44LDE5LjMsMjZMMTkuMywyNnoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMzAuM2MwLDAuMiwwLjEsMC42LTAuMSwwLjlzLTAuNiwwLjEtMC45LDAuMWMtMC43LDAtMC43LDAtMC43LTAuN2MwLTAuMywwLTAuNiwwLTFzMC4xLTAuMywwLjMtMC4zCglsMS4xLDBjMC4yLDAsMC4zLDAuMSwwLjMsMC4zUzE5LjMsMzAsMTkuMywzMC4zeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYuMSwyNi4ydjAuN2MwLDAuMS0wLjEsMC4yLTAuMiwwLjJsLTEsMC4xYy0wLjIsMC0wLjIsMC0wLjMtMC4yYzAtMC41LDAtMC45LDAtMS40YzAtMC4yLDAuMS0wLjMsMC4zLTAuMwoJczAuNiwwLDAuOS0wLjFjMC4zLTAuMSwwLjMsMC4xLDAuMywwLjNTMTYuMiwyNS45LDE2LjEsMjYuMkwxNi4xLDI2LjJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNi4xLDMwLjNWMzFjMCwwLjIsMCwwLjMtMC4zLDAuM2gtMWMtMC4xLDAtMC4yLDAtMC4yLTAuMmMwLTAuNSwwLTAuOSwwLTEuNGMwLTAuMiwwLjEtMC4zLDAuMy0wLjQKCUMxNiwyOS4xLDE2LjEsMjkuMiwxNi4xLDMwLjN6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMy4yLDI2LjNjMCwwLjksMCwwLjktMC45LDFIMTJjLTAuMiwwLTAuMy0wLjEtMC4zLTAuMnYtMS40YzAtMC4xLDAuMS0wLjMsMC4yLTAuM2MwLDAsMCwwLDAuMSwwaDEKCWMwLjIsMCwwLjIsMC4xLDAuMiwwLjJMMTMuMiwyNi4zeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuMiwzMC4zVjMxYzAsMC4xLTAuMSwwLjItMC4yLDAuMmgtMWMtMC4yLDAtMC4zLTAuMS0wLjMtMC4zdi0xLjNjMC0wLjIsMC4xLTAuMywwLjMtMC4zaDAuOQoJYzAuMiwwLDAuMywwLjEsMC4zLDAuM0wxMy4yLDMwLjN6Ii8+Cjwvc3ZnPgo=',
                              alt: 'OfficeIcon',
                            }),
                            (0, o.jsx)('span', {
                              className: 'block text-center text-lg',
                              children: 'Visitanos fisicamente',
                            }),
                          ],
                        }),
                        (0, o.jsxs)('div', {
                          className: 'w-[150px] h-[150px]',
                          children: [
                            (0, o.jsx)('img', {
                              className: 'object-cover w-full drop-shadow-xl block',
                              src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ1IDQ1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NSA0NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNDQ0M0OEI7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy4xLDMwLjdWMTMuM2MwLTAuMSwwLjEtMC4yLDAuMS0wLjJjMC4zLTEuMywxLjUtMi4xLDIuOC0yLjFoMTcuNmMxLjIsMCwyLjMsMC44LDIuNywyCgljMC4xLDAuNiwwLjIsMS4yLDAuMiwxLjhjMCwwLjQsMCwwLjQsMC40LDAuM2wzLjktMS4zYzEtMC40LDIuMiwwLjIsMi42LDEuMmMwLjEsMC4yLDAuMSwwLjQsMC4xLDAuNmMwLDQuNCwwLDguNywwLDEzLjEKCWMtMC4xLDEuMS0xLDEuOS0yLjEsMS45Yy0wLjIsMC0wLjQsMC0wLjUtMC4xYy0xLjQtMC42LTIuOC0wLjktNC4yLTEuNWMtMC4yLTAuMS0wLjIsMC0wLjIsMC4ydjFjMC4xLDEuNi0xLjIsMi45LTIuNywzCgljLTAuMSwwLTAuMiwwLTAuMywwSDkuOWMtMC42LDAtMS4yLTAuMi0xLjctMC42QzcuNiwzMiw3LjMsMzEuNCw3LjEsMzAuN3ogTTI2LjQsMjYuNkwyNi40LDI2LjZjMC0wLjgsMC0xLjYsMC0yLjQKCWMwLjEtMC41LTAuMy0wLjktMC44LTFjLTAuMSwwLTAuMSwwLTAuMiwwYy0xLDAtMiwwLTMsMGMtMC40LDAtMC43LDAuMS0wLjksMC40Yy0wLjEsMC4yLTAuMywwLjMtMC42LDAuMmMwLDAsMCwwLDAsMAoJYy0yLjEtMC41LTMuOC0yLjEtNC41LTQuMmMtMC4xLTAuMi0wLjEtMC4zLDAuMi0wLjRjMC40LTAuMSwwLjctMC40LDAuNy0wLjljMC0xLjEsMC0yLjIsMC0zLjRjMC0wLjUtMC40LTAuOS0wLjktMC45aC01CgljLTAuMywwLTAuNiwwLjItMC43LDAuNmMwLDAsMCwwLjEsMCwwLjFjMCwxLjEsMC4xLDIuMiwwLjMsMy4yYzEuNSw2LjgsNy41LDExLjYsMTQuNCwxMS44YzAuNiwwLDAuOC0wLjIsMC44LTAuOFYyNi42eiIvPgo8L3N2Zz4K',
                              alt: 'VideoCallIcon',
                            }),
                            (0, o.jsx)('span', {
                              className: 'block text-center text-lg',
                              children: 'Visita virtual videollamada',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsxs)('div', {
                      className: 'mt-36 mb-8',
                      children: [
                        (0, o.jsx)('span', { className: 'text-2xl', children: 'Preguntas Frecuentes' }),
                        (0, o.jsx)('div', {
                          className: 'flex  gap-8 justify-around flex-wrap mt-8',
                          children: [
                            {
                              title: '¿Como funciona?',
                              body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora porro veniam quis? Quia dignissimos \n            consequuntur aperiam maiores quaerat nihil exercitationem accusamus eveniet, iste asperiores unde, repudiandae \n            reprehenderit voluptate! Labore nulla id iure nihil reprehenderit accusantium, dolorum nemo illo ratione \n            eum dolorem voluptatum facere porro laboriosam tenetur adipisci atque laudantium.\n            ',
                            },
                            {
                              title: '¿Por Que?',
                              body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora porro veniam quis? Quia dignissimos \n            consequuntur aperiam maiores quaerat nihil exercitationem accusamus eveniet, iste asperiores unde, repudiandae \n            reprehenderit voluptate! Labore nulla id iure nihil reprehenderit accusantium, dolorum nemo illo ratione \n            eum dolorem voluptatum facere porro laboriosam tenetur adipisci atque laudantium.\n            ',
                            },
                            {
                              title: '¿Que debo hacer?',
                              body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora porro veniam quis? Quia dignissimos \n            consequuntur aperiam maiores quaerat nihil exercitationem accusamus eveniet, iste asperiores unde, repudiandae \n            reprehenderit voluptate! Labore nulla id iure nihil reprehenderit\n            ',
                            },
                            {
                              title: '¿Que es?',
                              body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora porro veniam quis? Quia dignissimos \n            consequuntur aperiam maiores quaerat nihil exercitationem accusamus eveniet, iste asperiores unde, repudiandae \n            reprehenderit voluptate! Labore nulla id iure nihil reprehenderit\n            ',
                            },
                          ].map((e, s) =>
                            (0, o.jsx)(
                              'div',
                              {
                                className: 'card w-[275px] glass max-h-[350px] overflow-y-auto scroll_none py-3',
                                children: (0, o.jsxs)('div', {
                                  className: 'card-body',
                                  children: [
                                    (0, o.jsx)('h2', {
                                      className: 'card-title text-xl mb-5 font-bold',
                                      children: e.title,
                                    }),
                                    (0, o.jsx)('p', { className: 'text-base text-gray-300', children: e.body }),
                                  ],
                                }),
                              },
                              s,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      const _e = `${t.p}3c3cb1e53b6c5b253255.jpg`;
      const Pe = t(42745);
      const Be = function () {
        return (0, o.jsxs)('div', {
          children: [
            (0, o.jsx)(b, {}),
            (0, o.jsx)('div', {
              className: 'flex justify-center px-10 lg:px-0 w-full',
              children: (0, o.jsx)('img', {
                src: _e,
                alt: 'banner',
                className: 'object-cover block lg:w-[800px] h-full rounded-2xl shadow-xl',
              }),
            }),
            (0, o.jsx)('div', {
              className: 'w-full flex justify-center py-10',
              children: (0, o.jsxs)('div', {
                className: 'w-full xl:w-[1200px] px-10 xl:px-0',
                children: [(0, o.jsx)(Pe.lb, {}), (0, o.jsx)(v, {}), (0, o.jsx)(S, {}), (0, o.jsx)(E, {})],
              }),
            }),
          ],
        });
      };
      const Ue = t(66261);
      const Ge = function () {
        const e = (0, d.UO)().type;
        const s = (0, r.v9)((e) => e.api);
        const t = s.services.list;
        const a = s.mark.state;
        return (
          (0, C.useEffect)(() => {
            a && Ue.OK.scrollTo('anchorService', { duration: 1200, delay: 0, smooth: !0, offset: -100 });
          }, [a]),
          (0, o.jsxs)('div', {
            className: 'bg-base-100',
            children: [
              (0, o.jsxs)('div', {
                className: 'relative',
                children: [
                  (0, o.jsx)('div', { className: 'w-full h-[950px] md:h-[93vh] service_container_2' }),
                  (0, o.jsx)(y, {
                    title: 'Estamos a un click de tus sueños',
                    subtitle: '¿Estas preparado?',
                    serviceName: e,
                  }),
                ],
              }),
              (0, o.jsx)(Ue.W_, {
                name: 'anchorService',
                children: (0, o.jsx)('div', {
                  className: '!p-10 xl:!px-32',
                  children:
                    e === 'Hoteles' &&
                    t &&
                    t.map((e, s) => {
                      let t;
                      return (0, o.jsx)(
                        'div',
                        {
                          children:
                            e.name === 'Hoteles' &&
                            ((t = e.api) === null || void 0 === t ? void 0 : t.name.toLowerCase().trim()) ===
                              'ratehawk' &&
                            (0, o.jsx)(Se.D, {}),
                        },
                        s,
                      );
                    }),
                }),
              }),
            ],
          })
        );
      };
      const He = function () {
        return (0, o.jsx)('div', {
          className: 'p-5 flex justify-center',
          children: (0, o.jsxs)('div', {
            className: 'w-full xl:w-[1200px] mt-8',
            children: [
              (0, o.jsx)('span', { className: 'font-medium text-xl text-white ', children: 'Proceso de pago' }),
              (0, o.jsx)('div', { className: 'my-10 ', children: (0, o.jsx)(ve, {}) }),
            ],
          }),
        });
      };
      const We = function () {
        const e = (0, r.v9)((e) => e.client.payment);
        const s = e.state;
        const t = e.checkoutId;
        const a = (0, r.I0)();
        const n = (0, d.s0)();
        return (
          (0, C.useEffect)(() => {
            let e = '';
            s === 'success' && (e = '/history-travel'), s === 'error' && (e = '/'), n(e, { replace: !0 });
          }, [s, a, n]),
          (0, C.useEffect)(() => {
            t
              ? a(
                  (function () {
                    const e = (0, Y.Z)(
                      _().mark(function e(s, t) {
                        let a;
                        let n;
                        let i;
                        let r;
                        let l;
                        let c;
                        let o;
                        let u;
                        let d;
                        let x;
                        let m;
                        let M;
                        let w;
                        let j;
                        let L;
                        let p;
                        let f;
                        let N;
                        let D;
                        let C;
                        let y;
                        let b;
                        let g;
                        let v;
                        let A;
                        let S;
                        let E;
                        let I;
                        return _().wrap((e) => {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = t()),
                                  (n = a.client.payment),
                                  (i = n.checkoutId),
                                  (r = n.partnerOrder),
                                  (l = a.shopping.shopping),
                                  (c = a.auth.uid),
                                  s(re('checkout')),
                                  (e.next = 4),
                                  (0, H.JE)(
                                    (0, B.X2)({ url: '/payment/'.concat(i), method: 'get' }).catch((e) => {
                                      e.response.status === 403 ? s((0, G.Y2)()) : (0, P.i)(), s(re('error'));
                                    }),
                                    'statePayment',
                                  )
                                );
                              case 4:
                                if (
                                  ((o = e.sent),
                                  (u = o.status),
                                  (d = o.data.data),
                                  (x = d.result.code === '000.100.112'),
                                  u !== 200 || !x)
                                ) {
                                  e.next = 46;
                                  break;
                                }
                                if (
                                  ((m = localStorage.getItem('paymentType')),
                                  (M = localStorage.getItem('apiService')),
                                  (w = localStorage.getItem('formPayment')),
                                  (j = null),
                                  (L = null),
                                  (p = null),
                                  m && w && M)
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                return e.abrupt(
                                  'return',
                                  h().fire({
                                    title: 'Error al finalizar la reserva',
                                    text: 'No se pudo obtener el tipo de pago o el servicio, contáctese con el administrador para suspender el pago',
                                    icon: 'error',
                                  }),
                                );
                              case 17:
                                if (
                                  ((j = JSON.parse(m)),
                                  (L = JSON.parse(M)),
                                  (p = JSON.parse(w)),
                                  (N = (f = p).language),
                                  (D = f.rooms),
                                  (C = f.user),
                                  (y = f.phone),
                                  (b = f.voucher),
                                  (g = ne(
                                    ne({}, p),
                                    {},
                                    {
                                      language: N,
                                      rooms: D,
                                      user: ne(ne({}, C), {}, { phone: y[0].number, email: b.email }),
                                    },
                                  )),
                                  (v = []),
                                  !r)
                                ) {
                                  e.next = 33;
                                  break;
                                }
                                A = 0;
                              case 25:
                                if (!(A < r.length)) {
                                  e.next = 33;
                                  break;
                                }
                                return (
                                  (e.next = 28),
                                  oe(
                                    ne(
                                      ne({}, g),
                                      {},
                                      {
                                        partner: {
                                          partner_order_id: r[A].partner_order_id,
                                          amount_sell_b2b2c: '1',
                                          comment: 'partner comment',
                                        },
                                        payment_type: j[A],
                                      },
                                    ),
                                    L,
                                  )
                                );
                              case 28:
                                e.sent || v.push(r[A]);
                              case 30:
                                A++, (e.next = 25);
                                break;
                              case 33:
                                (S = l ? (0, Z.Z)(l) : []),
                                  v.length > 0
                                    ? ((E = ''),
                                      v.forEach((e) => {
                                        const s = e.partner_order_id;
                                        (E += ''.concat(s, ' \n')),
                                          l == null ||
                                            l.forEach((e, t) => {
                                              e.order.partner_order_id === s &&
                                                (S[t] = ne(
                                                  ne({}, S[t]),
                                                  {},
                                                  {
                                                    errorBooking: 'error en la reserva '
                                                      .concat(S[t].service.api, ', \n                N.orden = ')
                                                      .concat(s, ', \n                fecha de reservación = ')
                                                      .concat(ee()().format('DD/MM/YYYY')),
                                                  },
                                                ));
                                            });
                                      }),
                                      s(re('error')),
                                      h().fire({
                                        title: 'Error al finalizar una o varias reservas',
                                        text: 'Contacta a un asesor con los siguientes id de reservas (partnerOrderID): '.concat(
                                          E,
                                          ' /',
                                        ),
                                        icon: 'error',
                                      }))
                                    : (s(re('success')),
                                      s(ie('')),
                                      localStorage.removeItem('util'),
                                      h().fire({
                                        title: 'Reserva realizada con éxito',
                                        text: 'La reserva se ha realizado con éxito, en breve recibirá un correo con los datos de tu voucher',
                                        icon: 'success',
                                      })),
                                  (I = localStorage.getItem('formPayment')) && (I = JSON.parse(I)),
                                  s(ue({ accountId: c, form: I, shopping: S })),
                                  localStorage.removeItem('formPayment'),
                                  localStorage.removeItem('apiService'),
                                  localStorage.removeItem('paymentType'),
                                  localStorage.removeItem('checkoutId'),
                                  s((0, X.Q5)()),
                                  (e.next = 48);
                                break;
                              case 46:
                                s(re('error')),
                                  h().fire({
                                    title: 'Error al procesar el pago',
                                    text: d.result.description,
                                    icon: 'error',
                                  });
                              case 48:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (s, t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                )
              : (a(re('error')), n('/'));
          }, [a, t, n]),
          (0, C.useEffect)(() => {
            const e = function (e) {
              return e.preventDefault(), (e.returnValue = 'Leaving this page will reset the wizard');
            };
            return (
              addEventListener('beforeunload', e, { capture: !0 }),
              function () {
                removeEventListener('beforeunload', e, { capture: !0 });
              }
            );
          }, []),
          (0, o.jsx)('div', {
            children:
              s === 'checkout'
                ? (0, o.jsx)(c.yI, {})
                : (0, o.jsx)('small', {
                    children: 'Procesando información de pago, por favor. No cierre esta ventana!',
                  }),
          })
        );
      };
      var Ze = function () {
        const e = (0, H.WH)({ area: 'logout' }).promiseInProgress;
        const s = (0, r.v9)((e) => e.auth).uid;
        const t = (0, r.I0)();
        return (
          (0, C.useEffect)(() => {
            t((0, Ie.A)());
          }, [t]),
          (0, C.useEffect)(() => {
            t(
              (function () {
                const e = (0, Y.Z)(
                  _().mark(function e(s, t) {
                    let a;
                    let n;
                    let i;
                    let r;
                    let l;
                    return _().wrap((e) => {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t().auth.uid),
                              (e.next = 3),
                              (0, H.JE)(
                                (0, B.X2)({ url: '/membership/account/'.concat(a), method: 'get' }).catch((e) => {
                                  e.response.status === 403 ? s((0, G.Y2)()) : (0, P.i)();
                                }),
                                'membershipListUID',
                              )
                            );
                          case 3:
                            (n = e.sent),
                              (i = n.status),
                              (r = n.data.memberships),
                              i === 200 && r
                                ? ((l = r.map((e) => {
                                    let s = '';
                                    return {
                                      id: e.id,
                                      name: e.name,
                                      exp: g.Z.unix(Number(e.exp)).format('yyyy-MM-DD'),
                                      price: e.price,
                                      state: e.state,
                                      services: e.services.map((e) => {
                                        let t;
                                        return (
                                          (s = e.serviceId),
                                          {
                                            id: String(e == null ? void 0 : e.id),
                                            provider:
                                              ((t = e.service.informationApi) === null || void 0 === t
                                                ? void 0
                                                : t.name.toLowerCase()) || '',
                                            dsto: e == null ? void 0 : e.dsto,
                                            service: e.service.name,
                                          }
                                        );
                                      }),
                                      serviceId: s,
                                    };
                                  })),
                                  s(W(l)))
                                : s(W([]));
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (s, t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          }, [t]),
          (0, C.useEffect)(() => {
            t((0, L.kI)());
          }, [t]),
          (0, C.useEffect)(() => {
            s && t((0, X.$k)(s));
          }, [t, s]),
          (0, C.useEffect)(() => {
            t((0, L.IZ)());
          }, [t]),
          (0, o.jsx)('div', {
            children: e
              ? (0, o.jsx)(c.yI, {})
              : (0, o.jsxs)(d.Z5, {
                  children: [
                    (0, o.jsxs)(d.AW, {
                      element: (0, o.jsx)(Ae, {}),
                      children: [
                        (0, o.jsx)(d.AW, { index: !0, element: (0, o.jsx)(Be, {}) }),
                        (0, o.jsx)(d.AW, { path: 'profile', element: (0, o.jsx)(c.BQ, {}) }),
                        (0, o.jsx)(d.AW, { path: 'promo', element: (0, o.jsx)(Te, {}) }),
                        (0, o.jsx)(d.AW, { path: 'services/:type', element: (0, o.jsx)(Ge, {}) }),
                        (0, o.jsx)(d.AW, { path: 'service/hotel/1/:id', element: (0, o.jsx)(Se.R, {}) }),
                        (0, o.jsx)(d.AW, { path: 'shopping-cart', element: (0, o.jsx)(Ee.U, {}) }),
                        (0, o.jsx)(d.AW, { path: 'history-travel', element: (0, o.jsx)(Ye, {}) }),
                        (0, o.jsx)(d.AW, { path: 'help', element: (0, o.jsx)(Qe, {}) }),
                        (0, o.jsx)(d.AW, { path: 'payment', element: (0, o.jsx)(He, {}) }),
                        (0, o.jsx)(d.AW, { path: 'chat/*', element: (0, o.jsx)(a.W, {}) }),
                      ],
                    }),
                    (0, o.jsx)(d.AW, { path: 'checkout', element: (0, o.jsx)(We, {}) }),
                    (0, o.jsx)(d.AW, { path: '*', element: (0, o.jsx)(o.Fragment, { children: 'Estas perdido' }) }),
                  ],
                }),
          })
        );
      };
      const Ve = Ze;
    },
    42745: (e, s, t) => {
      t.d(s, { lb: () => h, Sx: () => L, Es: () => w });
      const a = t(94649);
      const n = t(78596);
      const i = t(23594);
      const r = t(96974);
      const l = t(19501);
      const c = l.Ry({
        password: l.Z_().min(8, 'La contraseña necesita almenos 8 caracteres').required('La contraseña es necesaria'),
        email: l.Z_().email().required('correo requerido'),
      });
      const o = t(85893);
      const u = function () {
        const e = (0, i.I0)();
        const s = (0, r.s0)();
        return (0, o.jsx)(a.J9, {
          initialValues: { email: '', password: '' },
          onSubmit(s) {
            e((0, n.XY)(s));
          },
          validationSchema: c,
          children(e) {
            const t = e.errors;
            const n = e.touched;
            return (0, o.jsx)('div', {
              className: 'login bg-[#1d366f] text-white',
              children: (0, o.jsxs)(a.l0, {
                className: 'login__form',
                noValidate: !0,
                children: [
                  (0, o.jsx)('span', { className: 'text-xl block text-center', children: 'Identifícate' }),
                  (0, o.jsxs)('div', {
                    children: [
                      (0, o.jsxs)('div', {
                        children: [
                          (0, o.jsx)(a.gN, {
                            type: 'email',
                            name: 'email',
                            placeholder: 'Ingresa tu correo',
                            className: 'input input-bordered input-sm placeholder:text-black',
                            autoComplete: 'off',
                          }),
                          t.email && n.email && (0, o.jsx)('div', { className: 'error text-white', children: t.email }),
                        ],
                      }),
                      (0, o.jsx)(a.gN, {
                        type: 'password',
                        name: 'password',
                        placeholder: 'Ingresa tu contraseña',
                        autoComplete: 'off',
                        className: 'input input-bordered input-sm placeholder:text-black',
                      }),
                      t.password &&
                        n.password &&
                        (0, o.jsx)('div', { className: 'error text-white', children: t.password }),
                      (0, o.jsxs)('div', {
                        className: 'mt-5 flex !gap-2 items-center',
                        children: [
                          (0, o.jsx)('span', {
                            className: 'cursor-pointer text-sm mr-2',
                            onClick() {
                              return s('/forgot-password');
                            },
                            children: '¿Olvidaste tu clave?',
                          }),
                          (0, o.jsx)('input', {
                            type: 'submit',
                            value: 'iniciar sesion',
                            className: 'btn btn__gold btn-sm',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
        });
      };
      const d = t(70885);
      const x = t(39711);
      const m = t(25976);
      const M = t(67294);
      var w = function () {
        const e = (0, M.useState)(!1);
        const s = (0, d.Z)(e, 2);
        const t = s[0];
        const a = s[1];
        const n = function () {
          return a(!t);
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)('div', {
              className: 'navbar bg-base-100 landing_nav',
              children: [
                (0, o.jsx)('div', {
                  className: 'navbar-start',
                  children: (0, o.jsx)(x.rU, {
                    to: '/',
                    className: ' normal-case text-xl landing__logo ml-5',
                    children: (0, o.jsx)('img', { src: m, alt: 'logo' }),
                  }),
                }),
                (0, o.jsxs)('div', {
                  className: 'navbar-end',
                  children: [
                    (0, o.jsxs)('div', {
                      className: 'dropdown dropdown-end',
                      children: [
                        (0, o.jsx)('label', {
                          tabIndex: 0,
                          className: 'btn btn-ghost lg:hidden',
                          children: (0, o.jsx)('i', { className: 'fa-solid fa-bars text-2xl' }),
                        }),
                        (0, o.jsxs)('ul', {
                          tabIndex: 0,
                          className: 'menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52',
                          children: [
                            (0, o.jsx)('li', { children: (0, o.jsx)(x.rU, { to: '/', children: 'Inicio' }) }),
                            (0, o.jsx)('li', {
                              children: (0, o.jsx)(x.rU, { to: '/about', children: '¿Como funcionamos?' }),
                            }),
                            (0, o.jsx)('li', { onClick: n, children: (0, o.jsx)('a', { children: 'Iniciar Sesión' }) }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)('div', {
                      className: 'hidden lg:flex',
                      children: (0, o.jsxs)('ul', {
                        className: 'menu menu-horizontal p-0 z-10',
                        children: [
                          (0, o.jsx)('li', { children: (0, o.jsx)(x.rU, { to: '/', children: 'Inicio' }) }),
                          (0, o.jsx)('li', {
                            children: (0, o.jsx)(x.rU, { to: '/about', children: '¿Como funcionamos?' }),
                          }),
                          (0, o.jsx)('li', { onClick: n, children: (0, o.jsx)('a', { children: 'Iniciar Sesión' }) }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)('div', { style: { display: t ? 'block' : 'none' }, children: (0, o.jsx)(u, {}) }),
          ],
        });
      };
      const j = t(40662);
      var L = function () {
        return (0, o.jsxs)('div', {
          className: 'landing__header_container !px-5',
          children: [
            (0, o.jsxs)('div', {
              className: 'landing__header_description text-white',
              children: [
                (0, o.jsx)('h2', {
                  className: 'text-7xl block text-center md:text-left 2xl:text-8xl',
                  children: 'Viaja',
                }),
                (0, o.jsx)('p', {
                  className: 'text-xl my-10 block text-center md:text-left 2xl:text-2xl px-4',
                  children: 'Con la membresía que te brinda beneficios en en ahorros y descuentos exclusivos',
                }),
                (0, o.jsx)('div', {
                  className: 'w-full ml-5 sm:ml-0',
                  children: (0, o.jsx)(x.rU, {
                    to: '/contacts',
                    className: 'btn btn__gold w-[250px]',
                    children: 'Contactanos',
                  }),
                }),
              ],
            }),
            (0, o.jsx)(j.nq, {}),
          ],
        });
      };
      const p = t(12622);
      var h = function () {
        return (0, o.jsxs)('div', {
          className: 'mt-10',
          children: [
            (0, o.jsx)('div', {
              className: 'flex gap-5 flex-wrap justify-center xl:justify-between mt-5',
              children: [
                {
                  img: 'https://images.unsplash.com/photo-1565613432435-6151eaad66fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
                  city: 'Quito',
                  cod: '3D/2N',
                  p_afiliado: '150',
                  p_normal: '230',
                },
                {
                  img: 'https://images.unsplash.com/photo-1628004566999-83b23fdc411f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
                  city: 'Guayaquil',
                  cod: '3D/2N',
                  p_afiliado: '210',
                  p_normal: '290',
                },
                {
                  img: 'https://images.unsplash.com/photo-1610226977124-9fd2755d09f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
                  city: 'Cuenca',
                  cod: '3D/2N',
                  p_afiliado: '220',
                  p_normal: '330',
                },
                {
                  img: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                  city: 'Orlando',
                  cod: '8D/7N',
                  p_afiliado: '1250',
                  p_normal: '1750',
                },
                {
                  img: 'https://images.unsplash.com/photo-1616423841125-8307665a0469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
                  city: 'Cancún',
                  cod: '8D/7N',
                  p_afiliado: '680',
                  p_normal: '1330',
                },
                {
                  img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
                  city: 'Tour Europa',
                  cod: '19D/18N',
                  p_afiliado: '2250',
                  p_normal: '4000',
                },
              ].map((e, s) =>
                (0, o.jsxs)(
                  'div',
                  {
                    className: 'shadow-xl w-[380px] flex gap-2 rounded-lg xl:h-[260px]',
                    children: [
                      (0, o.jsx)('img', {
                        src: e.img,
                        alt: 'img_service',
                        className: 'block h-full object-cover w-1/2 rounded-l-lg',
                      }),
                      (0, o.jsxs)('div', {
                        className: 'flex flex-col w-1/2 bg-base-100 rounded-r-lg',
                        children: [
                          (0, o.jsxs)('div', {
                            className: 'text-white bg-[#6B6CB0] p-2',
                            children: [
                              (0, o.jsx)('span', { className: 'text-3xl font-bold block', children: e.city }),
                              (0, o.jsx)('span', { className: 'text-sm block px-2', children: e.cod }),
                            ],
                          }),
                          (0, o.jsxs)('div', {
                            className: 'p-2',
                            children: [
                              (0, o.jsxs)('div', {
                                className: 'text-[#6B6CB0] font-bold mb-2',
                                children: [
                                  (0, o.jsx)('p', { className: 'text-sm sm:text-lg', children: 'Precio afiliados' }),
                                  (0, o.jsxs)('span', {
                                    children: [
                                      '$'.concat(e.p_afiliado, ' '),
                                      (0, o.jsx)('small', { children: '(Desde)' }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, o.jsx)('hr', { className: 'px-2 block' }),
                              (0, o.jsxs)('div', {
                                className: 'text-gray-500 font-bold',
                                children: [
                                  (0, o.jsx)('p', { className: 'text-sm sm:text-lg', children: 'Precio Normal' }),
                                  (0, o.jsxs)('span', {
                                    children: [
                                      '$'.concat(e.p_normal, ' '),
                                      (0, o.jsx)('small', { children: '(Desde)' }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
            (0, o.jsx)('div', { className: 'h-[100px] w-full relative mt-8', children: (0, o.jsx)(p.O, {}) }),
          ],
        });
      };
    },
    69167: (e, s, t) => {
      t.d(s, { U: () => j });
      const a = t(70885);
      const n = t(12164);
      const i = t(94649);
      const r = t(10615);
      const l = t(23594);
      const c = t(80653);
      const o = t(85893);
      const u = function (e) {
        const s = e.cart;
        const t = e.index;
        const a = e.uid;
        const i = e.rol;
        const u = e.clientActive;
        const d = (0, l.I0)();
        return (0, o.jsxs)('div', {
          children: [
            (0, o.jsxs)('div', {
              className: 'flex gap-4 text-gray-400 items-center',
              children: [
                (0, o.jsxs)('span', { className: 'font-bold', children: ['item num. ', t + 1] }),
                (0, o.jsx)('button', {
                  title: 'Delete item',
                  type: 'button',
                  className: 'btn btn-circle btn-md btn-ghost',
                  children: (0, o.jsx)('i', {
                    className: 'fa-solid fa-trash text-lg',
                    onClick() {
                      return (function (e) {
                        d((0, c.CX)(e, String(i && i === 'seller' ? (u == null ? void 0 : u.id) : a)));
                      })(s);
                    },
                  }),
                }),
              ],
            }),
            (0, o.jsxs)('div', {
              className: 'bg-[#56619F] mt-2 p-4 rounded-xl flex flex-col md:flex-row gap-4',
              children: [
                (0, o.jsx)('div', {
                  className: 'w-full md:w-[350px] lg:w-[450px]',
                  children: (0, o.jsx)(r.lr, {
                    emulateTouch: !0,
                    showArrows: !1,
                    showThumbs: !1,
                    infiniteLoop: !0,
                    showStatus: !1,
                    children:
                      s.img &&
                      s.img.map((e, s) =>
                        (0, o.jsx)(
                          'div',
                          {
                            children: (0, o.jsx)('img', {
                              src: e.replace('{size}', 'x500'),
                              alt: 'hotel',
                              className: 'h-[240px] object-cover rounded-xl',
                            }),
                          },
                          s,
                        ),
                      ),
                  }),
                }),
                (0, o.jsxs)('div', {
                  className: 'text-gray-200 text-sm gap-4 flex flex-col md:flex-row w-full justify-between',
                  children: [
                    (0, o.jsxs)('div', {
                      className: 'bg-[#003C6B] rounded-xl p-4 flex flex-col items-end md:order-2 h-fit',
                      children: [
                        (0, o.jsxs)('span', { className: 'block', children: ['Precio: USD ', s.subtotal.toFixed(2)] }),
                        (0, o.jsxs)('span', { className: 'block', children: ['Impuestos: USD ', s.iva.toFixed(2)] }),
                        (0, o.jsxs)('span', {
                          className: 'block',
                          children: ['Ahorro x membresía: USD ', s.discount.toFixed(2)],
                        }),
                        (0, o.jsxs)('span', {
                          className: 'block font-bold text-accent',
                          children: ['Total: USD ', s.total.toFixed(2)],
                        }),
                      ],
                    }),
                    (0, o.jsxs)('div', {
                      className: 'flex flex-col md:order-1',
                      children: [
                        (0, o.jsx)('small', {
                          className: 'block',
                          children: n.Z.unix(Number(s.date)).format('DD [de] MMMM [del] yyyy'),
                        }),
                        s.name &&
                          (0, o.jsxs)('span', {
                            className: 'text-lg font-bold block',
                            children: ['Estancia ', s.name],
                          }),
                        (0, o.jsx)('span', { className: 'text-lg block', children: s.item_name }),
                        (0, o.jsx)('span', { className: 'text-md block', children: s.description }),
                        (0, o.jsx)('span', { className: 'text-md block', children: s.service.name }),
                        (0, o.jsx)('div', {
                          className: 'mt-8',
                          children: (0, o.jsxs)('span', {
                            className: 'font-bold',
                            children: ['Num. noches: ', (0, o.jsx)('strong', { children: s.night })],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      const d = t(67294);
      const x = function (e) {
        const s = e.values;
        const t = e.uid;
        const a = e.rol;
        const n = e.clientActive;
        const r = (0, l.I0)();
        return (
          (0, d.useEffect)(() => {
            const e = s.cart.reduce((e, s) => e + s.total, 0);
            r((0, c.uj)(e));
          }, [s, r]),
          (0, o.jsx)(i.F2, {
            name: 'cart',
            render() {
              return (0, o.jsx)('div', {
                children:
                  s.cart &&
                  s.cart.length > 0 &&
                  s.cart.map((e, s) => e && (0, o.jsx)(u, { cart: e, index: s, uid: t, rol: a, clientActive: n }, s)),
              });
            },
          })
        );
      };
      const m = (t(83745), t(96974));
      const M = t(86455);
      const w = t.n(M);
      var j = function () {
        const e = (0, l.v9)((e) => e);
        const s = e.shopping;
        const t = s.shopping;
        const r = s.total;
        const u = e.auth.uid;
        const M = e.user.rol;
        const j = e.seller.client.clientActive;
        const L = (0, l.I0)();
        const p = (0, m.s0)();
        const h = (0, d.useState)({ total: 0, cart: [] });
        const f = (0, a.Z)(h, 2);
        const N = f[0];
        const D = f[1];
        (0, d.useEffect)(() => {
          t && D({ total: 0, cart: t });
        }, [t, D]);
        return (0, o.jsx)('div', {
          className: 'p-5 flex justify-center',
          children: (0, o.jsxs)('div', {
            className: 'w-full xl:w-[1200px] mt-8',
            children: [
              (0, o.jsx)('span', { className: 'font-medium text-xl text-white ', children: 'Carrito' }),
              (0, o.jsx)('div', {
                className: 'my-10 ',
                children: (0, o.jsx)(i.J9, {
                  initialValues: N,
                  enableReinitialize: !0,
                  onSubmit(e) {
                    M === 'seller'
                      ? w().fire(
                          'Carrito generado completamente',
                          'El carrito ha sido generado en la cuenta del cliente para finalizar el proceso de pago',
                          'info',
                        )
                      : e && ((e.total = r || 0), p('/client/payment'));
                  },
                  children(e) {
                    const s = e.values;
                    return (0, o.jsx)(i.l0, {
                      children:
                        t && (t == null ? void 0 : t.length) > 0
                          ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)('div', {
                                  className: 'shopping mt-10',
                                  children: (0, o.jsxs)('div', {
                                    className: 'container-info',
                                    children: [
                                      (0, o.jsxs)('div', {
                                        className: 'info w-full',
                                        children: [
                                          (0, o.jsx)('small', {
                                            className: 'block date mb-5',
                                            children: (0, n.Z)(new Date()).format('DD [de] MMMM [del] yyyy'),
                                          }),
                                          (0, o.jsxs)('span', {
                                            className: 'text-sm',
                                            children: ['N° items seleccionados: ', t == null ? void 0 : t.length],
                                          }),
                                          (0, o.jsxs)('span', {
                                            className: 'text-xl',
                                            children: [
                                              'TOTAL A PAGAR:',
                                              ' ',
                                              (0, o.jsxs)('strong', { children: ['USD ', (r || 0).toFixed(2)] }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)('div', {
                                        className: 'flex flex-col sm:flex-row justify-between w-full gap-3 mt-5',
                                        children: [
                                          (0, o.jsxs)('button', {
                                            type: 'button',
                                            className:
                                              'btn w-full sm:w-[48%] rounded-2xl shadow-xl flex gap-3 bg-red-600',
                                            onClick() {
                                              return L((0, c.Oc)());
                                            },
                                            children: [
                                              (0, o.jsx)('i', { className: 'fa-solid fa-trash' }),
                                              (0, o.jsx)('span', { children: 'vaciar carrito' }),
                                            ],
                                          }),
                                          (0, o.jsxs)('button', {
                                            type: 'submit',
                                            className: 'btn w-full sm:w-[48%] rounded-2xl flex gap-3 btn__gold',
                                            children: [
                                              (0, o.jsx)('i', { className: 'fa-solid fa-cart-shopping' }),
                                              (0, o.jsx)('span', { children: 'reservar' }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, o.jsx)(x, { values: s, rol: M, uid: u, clientActive: j }),
                              ],
                            })
                          : (0, o.jsx)('div', {
                              className: 'min-h-[70vh] grid place-content-center',
                              children: (0, o.jsx)('span', {
                                className: 'text-xl text-gray-200',
                                children: 'No existen artículos en el carrito',
                              }),
                            }),
                    });
                  },
                }),
              }),
            ],
          }),
        });
      };
    },
    83745: (e, s, t) => {
      t.d(s, { i: () => n });
      const a = t(85893);
      var n = function () {
        return (0, a.jsx)('div', {
          className: 'flex flex-col gap-8',
          children: new Array(4)
            .fill({})
            .map((e, s) =>
              (0, a.jsxs)(
                'div',
                {
                  className: 'w-full flex flex-col md:flex-row gap-4 bg-base-100 p-4 rounded-xl',
                  children: [
                    (0, a.jsx)('div', {
                      className: 'skeleton-box rounded-xl h-[240px] w-full md:w-[350px] lg:w-[450px]',
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex flex-col gap-2 w-full',
                      children: [
                        (0, a.jsx)('div', { className: 'skeleton-box w-full md:h-[40px] md:w-1/2 rounded-lg' }),
                        (0, a.jsx)('div', { className: 'skeleton-box w-1/2 md:w-1/3 md:h-[20px] rounded-lg' }),
                        (0, a.jsx)('div', { className: 'skeleton-box w-1/3 rounded-lg' }),
                      ],
                    }),
                    (0, a.jsx)('div', { className: 'skeleton-box w-[80%] md:w-1/3 rounded-xl h-[100px]' }),
                  ],
                },
                s,
              ),
            ),
        });
      };
    },
    5696: () => {},
  },
]);
