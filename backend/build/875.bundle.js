(self.webpackChunk = self.webpackChunk || []).push([
  [875],
  {
    11738: (e, s, t) => {
      'use strict';
      t.d(s, { f: () => l.f });
      var l = t(31286);
    },
    97511: (e, s, t) => {
      'use strict';
      t.r(s), t.d(s, { SellerRoutes: () => ce, default: () => oe });
      var l = t(96974),
        n = t(70885),
        a = t(66261),
        r = t(67294),
        i = t(23594),
        c = t(84623),
        o = t(57476),
        d = t(9879),
        x = t(11738),
        h = t(85893),
        m = function (e) {
          var s,
            t = e.serviceName,
            l = void 0 === t ? 'Hoteles' : t,
            n = e.service,
            a = e.setService,
            r = e.list;
          return (0, h.jsxs)('div', {
            className: 'bg-grandient-primary rounded-xl p-5 sm:p-8 mt-8',
            children: [
              (0, h.jsx)('span', { className: 'block text-xl text-blue-900 font-bold', children: 'Servicios' }),
              (0, h.jsx)('span', {
                className: 'block text-xs italic text-gray-500',
                children: 'Selecciona el servicio de interés',
              }),
              (0, h.jsxs)('div', {
                className: 'mt-2',
                children: [
                  (0, h.jsx)('div', {
                    className: 'flex gap-3 p-2 rounded bg-[#ECECCC] justify-between md:justify-evenly flex-wrap',
                    children: r.map(function (e, s) {
                      return (0, h.jsxs)(
                        'label',
                        {
                          className: 'flex  gap-2 cursor-pointer w-[100px]',
                          children: [
                            (0, h.jsx)(
                              'input',
                              {
                                value: e.name,
                                defaultChecked: l === e.name,
                                onChange: function (s) {
                                  a(e);
                                },
                                type: 'radio',
                                name: 'services',
                                className: 'radio checked:bg-blue-500 radio-xs md:radio-sm',
                              },
                              s,
                            ),
                            (0, h.jsx)('span', { children: e.name }),
                          ],
                        },
                        s,
                      );
                    }),
                  }),
                  (0, h.jsx)('div', {
                    className: 'mt-4',
                    children:
                      r &&
                      'Hoteles' === (null == n ? void 0 : n.name) &&
                      (null == n || null === (s = n.api) || void 0 === s ? void 0 : s.state) &&
                      n.state &&
                      (0, h.jsx)(x.f, { isClientModule: !1 }),
                  }),
                ],
              }),
            ],
          });
        },
        u = t(4942),
        p = (t(87757), t(39234)),
        j = function (e) {
          return { type: p.I, payload: { clientActive: e } };
        },
        f = t(80653);
      function b(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          s &&
            (l = l.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      function v(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? b(Object(t), !0).forEach(function (s) {
                (0, u.Z)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (s) {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              });
        }
        return e;
      }
      function N(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          s &&
            (l = l.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      function g(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? N(Object(t), !0).forEach(function (s) {
                (0, u.Z)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (s) {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              });
        }
        return e;
      }
      var w = function () {
          var e = (0, i.I0)(),
            s = (0, i.v9)(function (e) {
              return e;
            }),
            t = s.seller.client.clientActive,
            l = s.admin.reports.membershipList,
            a = (function (e) {
              var s = (0, r.useState)(e),
                t = (0, n.Z)(s, 2),
                l = t[0],
                a = t[1];
              return v(
                v({ valueForm: l }, l),
                {},
                {
                  setValueForm: a,
                  reset: function () {
                    return a(e);
                  },
                  handleInputChange: function (e) {
                    var s = e.target,
                      t = s.value,
                      l = s.type,
                      n = s.checked,
                      r = s.files,
                      i = s.name,
                      c = t;
                    switch (l) {
                      case 'checkbox':
                        c = n;
                        break;
                      case 'file':
                        c = r;
                    }
                    a(function (e) {
                      return v(v({}, e), {}, (0, u.Z)({}, i, c));
                    });
                  },
                  handleEmoticonInputEnter: function (e) {
                    a(function (s) {
                      return v(v({}, s), {}, { message: e });
                    });
                  },
                },
              );
            })({ client: '' }),
            c = a.client,
            o = a.handleInputChange,
            d = a.setValueForm;
          return (
            (0, r.useEffect)(
              function () {
                c && e(j(JSON.parse(c)));
              },
              [c, e],
            ),
            (0, r.useEffect)(
              function () {
                !c &&
                  t &&
                  d(function (e) {
                    return g(g({}, e), {}, { client: JSON.stringify(t) });
                  });
              },
              [t, c, d],
            ),
            (0, r.useEffect)(
              function () {
                t && e((0, f.$k)(String(t.id)));
              },
              [t],
            ),
            (0, h.jsx)('div', {
              className: 'flex justify-end gap-4 items-center',
              children: (0, h.jsx)('div', {
                children: (0, h.jsxs)('select', {
                  title: 'select',
                  name: 'client',
                  value: c,
                  onChange: o,
                  className: 'select select-sm bg-[#ececcc] select-primary',
                  children: [
                    (0, h.jsx)('option', { value: '', disabled: !0, children: 'Seleccione un cliente' }),
                    l &&
                      l.length > 0 &&
                      l.map(function (e, s) {
                        return (0,
                        h.jsxs)('option', { value: JSON.stringify(e), children: [e.name, ' ', e.lastName] }, s);
                      }),
                  ],
                }),
              }),
            })
          );
        },
        y = function () {
          var e = (0, r.useState)(),
            s = (0, n.Z)(e, 2),
            t = s[0],
            l = s[1],
            x = (0, i.I0)(),
            u = (0, r.useState)(!1),
            p = (0, n.Z)(u, 2),
            j = p[0],
            f = p[1],
            b = (0, i.v9)(function (e) {
              return e.api;
            }),
            v = b.services.list,
            N = b.ratehawk.hotel;
          return (
            (0, r.useEffect)(
              function () {
                v.forEach(function (e) {
                  'Hoteles' === e.name && l(e);
                });
              },
              [l, v],
            ),
            (0, r.useEffect)(
              function () {
                'Seller' === N.type ? (f(!0), a.NY.scrollToTop({ delay: 500, smooth: !0, duration: 800 })) : f(!1);
              },
              [N.type],
            ),
            (0, h.jsxs)(h.Fragment, {
              children: [
                (0, h.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Cotización' }),
                (0, h.jsxs)('div', {
                  className: 'mt-2 rounded-xl p-5 bg-[#001E36] min-h-[800px]',
                  children: [
                    (0, h.jsx)('span', {
                      className:
                        'btn btn-ghost btn-sm px-7 border-2 border-white text-white p-2 cursor-pointer rounded-2xl',
                      children: 'Inicio',
                    }),
                    (0, h.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                    (0, h.jsxs)('div', {
                      className: 'md:p-8',
                      children: [
                        (0, h.jsx)(w, {}),
                        (0, h.jsx)(m, { service: t, setService: l, list: v }),
                        (0, h.jsx)(a.W_, {
                          name: 'anchorServiceSeller',
                          children:
                            t &&
                            'Hoteles' === t.name &&
                            v &&
                            (0, h.jsx)('div', {
                              className: 'mt-10 p-3 bg-grandient-primary rounded-xl',
                              children: v.map(function (e, s) {
                                var t = e.api,
                                  l = e.name;
                                return (0,
                                h.jsx)('div', { children: 'Hoteles' === l && 'ratehawk' === (null == t ? void 0 : t.name.toLowerCase().trim()) && (0, h.jsx)(c.D, { isClientModule: !1 }) }, s);
                              }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, h.jsx)('div', {
                  className: 'w-full',
                  children: (0, h.jsx)('div', {
                    className: 'modal w-full '.concat(j && 'modal-open'),
                    children: (0, h.jsxs)('div', {
                      className: 'bg-gradient-body w-[100vw] h-[100vh] overflow-y-auto',
                      children: [
                        (0, h.jsx)('div', {
                          className: 'w-full flex justify-end ',
                          children: (0, h.jsx)('div', {
                            className: 'absolute w-fit right-10 top-5 ',
                            children: (0, h.jsx)('button', {
                              title: 'close',
                              type: 'button',
                              className: 'btn btn-sm btn-circle ',
                              onClick: function () {
                                return x((0, o.M8)(void 0));
                              },
                              children: (0, h.jsx)('i', { className: 'fa-solid fa-xmark' }),
                            }),
                          }),
                        }),
                        (0, h.jsx)(d.h, { info: N.info }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        C = t(26736),
        O = function () {
          var e = (0, i.v9)(function (e) {
            return e.admin.promo;
          }).list;
          return (0, h.jsx)('div', {
            className: 'h-[750px] overflow-y-auto ',
            children: (0, h.jsx)('div', {
              className: 'flex flex-col gap-7 mx-5 ',
              children:
                null == e
                  ? void 0
                  : e.map(function (e, s) {
                      var t = e.img,
                        l = e.title,
                        n = e.description;
                      return (0,
                      h.jsxs)('div', { className: 'card shadow-xl image-full w-full h-[350px]', children: [(0, h.jsx)('figure', { children: (0, h.jsx)('img', { src: t ? ''.concat('http://ism.urgiz.com:4000', '/').concat(t) : C, alt: 'banner', className: 'w-full h-[350px] object-cover block' }) }), (0, h.jsxs)('div', { className: 'card-body', children: [(0, h.jsx)('h2', { className: 'card-title text-white text-3xl', children: l }), (0, h.jsx)('div', { className: 'card-actions justify-end ', children: (0, h.jsx)('div', { className: ' w-full md:w-2/5 flex flex-col gap-4', children: (0, h.jsxs)('div', { className: 'h-[200px] md:bg-base-100 rounded-xl shadow-xl md:text-black p-5 overflow-y-auto', children: [(0, h.jsx)('span', { className: 'text-lg text-bold', children: 'Detalle información' }), (0, h.jsx)('div', { className: 'mt-3 md:text-gray-500', children: n })] }) }) })] })] }, s);
                    }),
            }),
          });
        },
        k = function () {
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Promociones' }),
              (0, h.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-[#001E36] min-h-[800px]',
                children: [
                  (0, h.jsx)('span', {
                    className:
                      'btn btn-ghost btn-sm px-7 border-2 border-white text-white p-2 cursor-pointer rounded-2xl',
                    children: 'Motor de búsqueda',
                  }),
                  (0, h.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, h.jsx)(O, {}),
                ],
              }),
            ],
          });
        },
        S = t(40662),
        D = t(78888);
      function A(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          s &&
            (l = l.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      function M(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? A(Object(t), !0).forEach(function (s) {
                (0, u.Z)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (s) {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              });
        }
        return e;
      }
      var E = function (e) {
          var s = e.isOpen,
            t = e.sales,
            l = e.setModalSale;
          return (0, h.jsx)(D.u, {
            openModal: s,
            children: (0, h.jsxs)('div', {
              className: 'flex flex-col items-end ',
              children: [
                (0, h.jsxs)('table', {
                  className: 'table w-full  min-h-[300px] overflow-auto',
                  children: [
                    (0, h.jsx)('thead', {
                      children: (0, h.jsxs)('tr', {
                        children: [(0, h.jsx)('th', { children: 'Detalle' }), (0, h.jsx)('th', { children: 'Precio' })],
                      }),
                    }),
                    (0, h.jsx)('tbody', {
                      children:
                        null == t
                          ? void 0
                          : t.map(function (e, s) {
                              var t = e.detail,
                                l = e.price;
                              return (0,
                              h.jsxs)('tr', { children: [(0, h.jsx)('td', { children: t }), (0, h.jsxs)('td', { children: ['$ ', null == l ? void 0 : l.toFixed(2)] })] }, s);
                            }),
                    }),
                  ],
                }),
                (0, h.jsx)('button', {
                  onClick: function () {
                    return l(function (e) {
                      return M(M({}, e), {}, { isOpen: !1 });
                    });
                  },
                  className: 'btn btn-sm px-7 text-white p-2 cursor-pointer rounded-lg w-[200px] mt-5',
                  children: 'Cerrar',
                }),
              ],
            }),
          });
        },
        P = t(16923),
        L = t(42982),
        F = t(86972),
        I = t(37327),
        Z = t.n(I),
        W = t(86455),
        _ = t.n(W),
        U = t(938),
        J = function () {
          var e = (0, i.I0)(),
            s = (0, i.v9)(function (e) {
              return e.admin.reports;
            }),
            t = s.membershipList,
            l = s.selectReset,
            n = s.select,
            a = (0, U.C)(t || []),
            c = a.checkList,
            o = a.handleChangeMain,
            d = a.handleChange,
            x = a.isCheckedAll,
            h = a.resetCheckList,
            m = a.resetCheckAll;
          (0, r.useEffect)(
            function () {
              e((0, F.Ky)((0, L.Z)(c)));
            },
            [e, c],
          ),
            (0, r.useEffect)(
              function () {
                l && (h(), e((0, F.SS)(!1)));
              },
              [l, e],
            );
          return {
            handleDownload: function () {
              if (t) {
                if (!n || n.length <= 0)
                  return _().fire('Error al realizar la descarga', 'Debes seleccionar los datos de la lista', 'error');
                var s = [
                  {
                    sheet: 'membresias',
                    columns: [
                      { label: 'ID Cliente', value: 'id' },
                      { label: 'Nombre', value: 'name' },
                      { label: 'Apellido', value: 'lastName' },
                      { label: 'Documento', value: 'doc' },
                      { label: 'Correo', value: 'email' },
                    ],
                    content: [],
                  },
                  {
                    sheet: 'ventas',
                    columns: [
                      { label: 'ID Cliente', value: 'client' },
                      { label: 'ID Venta', value: 'id' },
                      { label: 'Nombre', value: 'name' },
                      { label: 'Detalle', value: 'detail' },
                      { label: 'Precio', value: 'price', format: '$0.00' },
                    ],
                    content: [],
                  },
                ];
                n.forEach(function (e) {
                  var t = JSON.parse(e),
                    l = t.name,
                    n = t.lastName,
                    a = t.doc,
                    r = t.id,
                    i = t.email,
                    c = t.sales;
                  s[0].content.push({ name: l || '', lastName: n || '', doc: a || '', id: r || '', email: i || '' }),
                    null == c ||
                      c.forEach(function (e) {
                        var t = e.id,
                          l = e.detail,
                          n = e.name,
                          a = e.price;
                        s[1].content.push({
                          client: r || '',
                          id: t || '',
                          name: n || '',
                          detail: l || '',
                          price: a || '',
                        });
                      });
                });
                Z()(s, { fileName: 'membershipReport', extraLength: 3, writeOptions: {} }), h(), m(), e((0, F.SS)(!1));
              }
            },
            membershipList: t,
            isCheckedAll: x,
            handleChangeMain: o,
            handleChange: d,
            checkList: c,
            select: n,
          };
        },
        R = function () {
          var e = J(),
            s = e.membershipList,
            t = e.handleDownload,
            l = e.isCheckedAll,
            a = e.handleChangeMain,
            i = e.handleChange,
            c = e.checkList,
            o = (0, r.useState)({ isOpen: !1, sales: [] }),
            d = (0, n.Z)(o, 2),
            x = d[0],
            m = d[1],
            u = (0, P.WH)({ area: 'reportList' }).promiseInProgress;
          return (0, h.jsx)('div', {
            children: u
              ? (0, h.jsx)('div', {
                  className: 'min-h-[60vh] grid place-content-center',
                  children: (0, h.jsx)(S.s_, { bg: 'bg-primary' }),
                })
              : (0, h.jsxs)('div', {
                  children: [
                    (0, h.jsxs)('div', {
                      className: 'max-h-[600px] mt-10 overflow-auto scroll_list bg-base-100 rounded-xl',
                      children: [
                        (0, h.jsx)('div', {
                          children:
                            s && s.length > 0
                              ? (0, h.jsx)('div', {
                                  className: 'table-container rounded-xl',
                                  children: (0, h.jsxs)('table', {
                                    className: 'table',
                                    children: [
                                      (0, h.jsx)('thead', {
                                        children: (0, h.jsxs)('tr', {
                                          children: [
                                            (0, h.jsx)('th', {
                                              children: (0, h.jsx)('input', {
                                                title: 'Check all',
                                                type: 'checkbox',
                                                onChange: a,
                                                checked: l,
                                                className: 'checkbox checkbox-sm checkbox-primary',
                                              }),
                                            }),
                                            (0, h.jsx)('th', { children: 'Nombre' }),
                                            (0, h.jsx)('th', { children: 'Apellido' }),
                                            (0, h.jsx)('th', { children: 'Documento' }),
                                            (0, h.jsx)('th', { children: 'Correo' }),
                                            (0, h.jsx)('th', { children: 'Ventas' }),
                                          ],
                                        }),
                                      }),
                                      (0, h.jsx)('tbody', {
                                        children:
                                          null == s
                                            ? void 0
                                            : s.map(function (e) {
                                                var s = e.id,
                                                  t = e.name,
                                                  l = e.lastName,
                                                  n = e.doc,
                                                  a = e.email,
                                                  r = e.sales;
                                                return (0, h.jsxs)(
                                                  'tr',
                                                  {
                                                    children: [
                                                      (0, h.jsx)('td', {
                                                        children: (0, h.jsx)('input', {
                                                          title: 'Check item',
                                                          type: 'checkbox',
                                                          className: 'checkbox checkbox-sm checkbox-primary',
                                                          onChange: i,
                                                          value: JSON.stringify(e),
                                                          checked: c.has(JSON.stringify(e)),
                                                        }),
                                                      }),
                                                      (0, h.jsx)('td', { children: t }),
                                                      (0, h.jsx)('td', { children: l }),
                                                      (0, h.jsx)('td', { children: n }),
                                                      (0, h.jsx)('td', { children: a }),
                                                      (0, h.jsx)('td', {
                                                        className: '',
                                                        children:
                                                          r && r.length > 0
                                                            ? (0, h.jsx)('i', {
                                                                className: 'fa-solid fa-tag  cursor-pointer',
                                                                onClick: function () {
                                                                  return (function (e) {
                                                                    return m({ isOpen: !0, sales: e || [] });
                                                                  })(r);
                                                                },
                                                              })
                                                            : (0, h.jsx)('span', {
                                                                className: 'text-xs',
                                                                children: 'S/N',
                                                              }),
                                                      }),
                                                    ],
                                                  },
                                                  s,
                                                );
                                              }),
                                      }),
                                    ],
                                  }),
                                })
                              : (0, h.jsx)('div', {
                                  className: 'min-h-[60vh] grid place-content-center',
                                  children: (0, h.jsxs)('span', {
                                    className: 'block text-lg text-center text-white',
                                    children: [' ', 'No existen ventas registradas'],
                                  }),
                                }),
                        }),
                        (0, h.jsx)(E, { isOpen: x.isOpen, sales: x.sales, setModalSale: m }),
                      ],
                    }),
                    (0, h.jsx)('div', {
                      className: 'mt-5 flex justify-end',
                      children: (0, h.jsxs)('button', {
                        onClick: t,
                        className: 'btn btn-sm',
                        disabled: u || !s || (s && s.length <= 0),
                        children: [
                          (0, h.jsx)('i', { className: 'fa-solid fa-file-export mr-3' }),
                          (0, h.jsx)('small', { children: 'Exportar base de datos excel' }),
                        ],
                      }),
                    }),
                  ],
                }),
          });
        },
        z = t(94649),
        H = function () {
          var e = (0, i.v9)(function (e) {
              return e;
            }).admin.membership.list,
            s = (0, i.I0)(),
            t = !1;
          return (0, h.jsx)('div', {
            className: 'flex flex-col md:flex-row justify-end md:justify-between gap-3',
            children: (0, h.jsx)('div', {
              className: 'w-full',
              children: (0, h.jsx)(z.J9, {
                initialValues: {
                  name: '',
                  filter: '',
                  doc: '',
                  startDate: '',
                  endDate: '',
                  membership: '',
                  numMembership: '',
                  email: '',
                  typeSort: '',
                },
                onSubmit: function (e, t) {
                  var l = t.resetForm;
                  s((0, F.hr)(e)), l();
                },
                children: function (l) {
                  var n = l.values;
                  return (0, h.jsx)(z.l0, {
                    noValidate: !0,
                    className: 'w-full',
                    children: (0, h.jsxs)('div', {
                      className: 'w-full flex md:flex-row flex-col gap-4',
                      children: [
                        (0, h.jsxs)(S.M5, {
                          name: 'filter',
                          text: 'Filtrar por:',
                          textLabelClassName: 'text-white',
                          as: 'select',
                          className: 'select-sm w-full',
                          disabled: t,
                          children: [
                            (0, h.jsx)('option', { value: '', children: 'Seleccione filtro' }),
                            (0, h.jsx)('option', { value: '1', children: 'alfabético' }),
                            (0, h.jsx)('option', { value: '2', children: 'Fecha' }),
                            (0, h.jsx)('option', { value: '3', children: 'Membresía' }),
                            (0, h.jsx)('option', { value: '4', children: 'Documento' }),
                            (0, h.jsx)('option', { value: '5', children: 'Nombre' }),
                            (0, h.jsx)('option', { value: '6', children: 'Correo' }),
                          ],
                        }),
                        '1' === n.filter &&
                          (0, h.jsxs)(S.M5, {
                            name: 'typeSort',
                            as: 'select',
                            text: 'Ordenar por:',
                            textLabelClassName: 'text-white',
                            className: 'select-sm',
                            disabled: t,
                            children: [
                              (0, h.jsx)('option', { value: '', disabled: !0, children: 'Seleccione uno' }),
                              (0, h.jsx)('option', { value: 'ASC', children: 'Ascendente' }),
                              (0, h.jsx)('option', { value: 'DESC', children: 'Descendente' }),
                            ],
                          }),
                        '2' === n.filter &&
                          (0, h.jsxs)(h.Fragment, {
                            children: [
                              (0, h.jsx)(S.M5, {
                                name: 'startDate',
                                type: 'date',
                                text: 'Fecha inicio',
                                textLabelClassName: 'text-white',
                                placeholder: 'Fecha Inicio',
                                className: 'input-sm',
                                disabled: t,
                              }),
                              (0, h.jsx)(S.M5, {
                                name: 'endDate',
                                type: 'date',
                                text: 'Fecha Fin',
                                textLabelClassName: 'text-white',
                                placeholder: 'Fecha Fin',
                                className: 'input-sm',
                                disabled: t,
                              }),
                            ],
                          }),
                        '3' === n.filter &&
                          (0, h.jsxs)(S.M5, {
                            name: 'membership',
                            as: 'select',
                            text: 'Membresía',
                            textLabelClassName: 'text-white',
                            className: 'select-sm',
                            disabled: t,
                            children: [
                              (0, h.jsx)('option', { value: '', disabled: !0, children: 'Seleccione una opción' }),
                              e &&
                                e.length > 0 &&
                                e.map(function (e, s) {
                                  return 'S/N' !== e.name && (0, h.jsx)('option', { value: e.id, children: e.name }, s);
                                }),
                            ],
                          }),
                        '5' === n.filter &&
                          (0, h.jsx)(S.M5, {
                            name: 'name',
                            text: 'Nombres',
                            textLabelClassName: 'text-white',
                            placeholder: 'Ingrese los nombres',
                            className: 'input-sm',
                            disabled: t,
                          }),
                        '4' === n.filter &&
                          (0, h.jsx)(S.M5, {
                            name: 'doc',
                            text: 'Documento',
                            textLabelClassName: 'text-white',
                            placeholder: 'Ingrese documento',
                            className: 'input-sm',
                            disabled: t,
                          }),
                        '6' === n.filter &&
                          (0, h.jsx)(S.M5, {
                            name: 'email',
                            text: 'Correo',
                            textLabelClassName: 'text-white',
                            placeholder: 'Ingrese correo',
                            className: 'input-sm',
                            disabled: t,
                          }),
                        n.filter &&
                          (0, h.jsxs)('div', {
                            className: 'flex gap-4',
                            children: [
                              (0, h.jsxs)('button', {
                                type: 'submit',
                                disabled: t,
                                className: 'btn btn-sm bg-blue-900 gap-3 w-[150px] mt-7 text-white ',
                                children: [
                                  (0, h.jsx)('i', { className: 'fa-solid fa-magnifying-glass text-lg ' }),
                                  (0, h.jsx)('span', { className: 'font-bold', children: 'Buscar' }),
                                ],
                              }),
                              (0, h.jsxs)('button', {
                                type: 'button',
                                disabled: t,
                                onClick: function () {
                                  s((0, F.zK)());
                                },
                                className: 'btn btn-sm gap-3 w-[150px] mt-7 text-white ',
                                children: [
                                  (0, h.jsx)('i', { className: 'fa-solid fa-rotate text-lg ' }),
                                  (0, h.jsx)('span', { className: 'font-bold', children: 'Recargar' }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  });
                },
              }),
            }),
          });
        },
        V = function () {
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Clientes' }),
              (0, h.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-[#001E36] min-h-[800px]',
                children: [
                  (0, h.jsx)('span', {
                    className:
                      'btn btn-ghost btn-sm px-7 border-2 border-white text-white p-2 cursor-pointer rounded-2xl',
                    children: 'Cartera',
                  }),
                  (0, h.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, h.jsx)(H, {}),
                  (0, h.jsx)('div', { className: 'mt-5', children: (0, h.jsx)(R, {}) }),
                ],
              }),
            ],
          });
        };
      function T(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          s &&
            (l = l.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      function B(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? T(Object(t), !0).forEach(function (s) {
                (0, u.Z)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (s) {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              });
        }
        return e;
      }
      var $ = function (e) {
          var s = e.isOpen,
            t = e.sales,
            l = e.setModalSale;
          return (0, h.jsx)(D.u, {
            openModal: s,
            children: (0, h.jsxs)('div', {
              className: 'flex flex-col items-end ',
              children: [
                (0, h.jsxs)('table', {
                  className: 'table w-full  min-h-[300px] overflow-auto',
                  children: [
                    (0, h.jsx)('thead', {
                      children: (0, h.jsxs)('tr', {
                        children: [
                          (0, h.jsx)('th', { children: 'Detalle' }),
                          (0, h.jsx)('th', { children: 'Estado' }),
                          (0, h.jsx)('th', { children: 'Precio' }),
                        ],
                      }),
                    }),
                    (0, h.jsx)('tbody', {
                      children:
                        null == t
                          ? void 0
                          : t.map(function (e, s) {
                              var t = e.detail,
                                l = e.price,
                                n = e.err;
                              return (0,
                              h.jsxs)('tr', { children: [(0, h.jsx)('td', { children: t }), (0, h.jsx)('td', { children: n }), (0, h.jsxs)('td', { children: ['$ ', Number(l).toFixed(2)] })] }, s);
                            }),
                    }),
                  ],
                }),
                (0, h.jsx)('button', {
                  onClick: function () {
                    return l(function (e) {
                      return B(B({}, e), {}, { isOpen: !1 });
                    });
                  },
                  className: 'btn btn-sm px-7 text-white p-2 cursor-pointer rounded-lg w-[200px] mt-5',
                  children: 'Cerrar',
                }),
              ],
            }),
          });
        },
        K = function () {
          var e = J(),
            s = e.membershipList,
            t = e.handleDownload,
            l = e.isCheckedAll,
            a = e.handleChangeMain,
            i = e.handleChange,
            c = e.checkList,
            o = (0, r.useState)({ isOpen: !1, sales: [] }),
            d = (0, n.Z)(o, 2),
            x = d[0],
            m = d[1],
            u = (0, P.WH)({ area: 'reportList' }).promiseInProgress,
            p = (0, P.WH)({ area: 'salesSeller' }).promiseInProgress;
          return (0, h.jsx)('div', {
            children:
              u || p
                ? (0, h.jsx)('div', {
                    className: 'min-h-[60vh] grid place-content-center',
                    children: (0, h.jsx)(S.s_, { bg: 'bg-primary' }),
                  })
                : (0, h.jsxs)('div', {
                    children: [
                      (0, h.jsxs)('div', {
                        className: 'max-h-[600px] mt-10 overflow-auto scroll_list bg-base-100 rounded-xl',
                        children: [
                          (0, h.jsx)('div', {
                            children:
                              s && s.length > 0
                                ? (0, h.jsx)('div', {
                                    className: 'table-container rounded-xl',
                                    children: (0, h.jsxs)('table', {
                                      className: 'table',
                                      children: [
                                        (0, h.jsx)('thead', {
                                          children: (0, h.jsxs)('tr', {
                                            children: [
                                              (0, h.jsx)('th', {
                                                children: (0, h.jsx)('input', {
                                                  title: 'Check all',
                                                  type: 'checkbox',
                                                  onChange: a,
                                                  checked: l,
                                                  className: 'checkbox checkbox-sm checkbox-primary',
                                                }),
                                              }),
                                              (0, h.jsx)('th', { children: 'Nombre' }),
                                              (0, h.jsx)('th', { children: 'Apellido' }),
                                              (0, h.jsx)('th', { children: 'Documento' }),
                                              (0, h.jsx)('th', { children: 'Correo' }),
                                              (0, h.jsx)('th', { children: 'Ventas' }),
                                            ],
                                          }),
                                        }),
                                        (0, h.jsx)('tbody', {
                                          children:
                                            null == s
                                              ? void 0
                                              : s.map(function (e, s) {
                                                  var t = e.name,
                                                    l = e.lastName,
                                                    n = e.doc,
                                                    a = e.email,
                                                    r = e.salesCurrenMont;
                                                  return (
                                                    r &&
                                                    r.length > 0 &&
                                                    (0, h.jsxs)(
                                                      'tr',
                                                      {
                                                        children: [
                                                          (0, h.jsx)('td', {
                                                            children: (0, h.jsx)('input', {
                                                              title: 'Check item',
                                                              type: 'checkbox',
                                                              className: 'checkbox checkbox-sm checkbox-primary',
                                                              onChange: i,
                                                              value: JSON.stringify(e),
                                                              checked: c.has(JSON.stringify(e)),
                                                            }),
                                                          }),
                                                          (0, h.jsx)('td', { children: t }),
                                                          (0, h.jsx)('td', { children: l }),
                                                          (0, h.jsx)('td', { children: n }),
                                                          (0, h.jsx)('td', { children: a }),
                                                          (0, h.jsx)('td', {
                                                            className: '',
                                                            children:
                                                              r && r.length > 0
                                                                ? (0, h.jsx)('i', {
                                                                    className: 'fa-solid fa-tag  cursor-pointer',
                                                                    onClick: function () {
                                                                      return m({ isOpen: !0, sales: r || [] });
                                                                    },
                                                                  })
                                                                : (0, h.jsx)('span', {
                                                                    className: 'text-xs',
                                                                    children: 'S/N',
                                                                  }),
                                                          }),
                                                        ],
                                                      },
                                                      s,
                                                    )
                                                  );
                                                }),
                                        }),
                                      ],
                                    }),
                                  })
                                : (0, h.jsx)('div', {
                                    className: 'min-h-[60vh] grid place-content-center',
                                    children: (0, h.jsxs)('span', {
                                      className: 'block text-lg text-center text-white',
                                      children: [' ', 'No existen ventas registradas'],
                                    }),
                                  }),
                          }),
                          (0, h.jsx)($, { isOpen: x.isOpen, sales: x.sales, setModalSale: m }),
                        ],
                      }),
                      (0, h.jsx)('div', {
                        className: 'mt-5 flex justify-end',
                        children: (0, h.jsxs)('button', {
                          onClick: t,
                          className: 'btn btn-sm',
                          disabled: u || !s || (s && s.length <= 0),
                          children: [
                            (0, h.jsx)('i', { className: 'fa-solid fa-file-export mr-3' }),
                            (0, h.jsx)('small', { children: 'Exportar base de datos excel' }),
                          ],
                        }),
                      }),
                    ],
                  }),
          });
        },
        q = function () {
          var e = (0, i.v9)(function (e) {
              return e;
            }),
            s = e.user.commission,
            t = e.admin,
            l = t.reports.membershipList,
            a = t.membership.list,
            c = (0, r.useState)(0),
            o = (0, n.Z)(c, 2),
            d = o[0],
            x = o[1],
            m = (0, i.I0)();
          (0, r.useEffect)(
            function () {
              l &&
                l.length > 0 &&
                s &&
                l.forEach(function (e) {
                  var t = e.salesCurrenMont;
                  if (t && t.length > 0) {
                    var l = t.reduce(function (e, s) {
                      return e + Number(s.price);
                    }, 0);
                    x((s * l) / 100);
                  }
                });
            },
            [s, x, l],
          );
          var u = !1;
          return (0, h.jsxs)('div', {
            className: 'flex flex-col md:flex-row justify-end md:justify-between gap-3',
            children: [
              (0, h.jsx)('div', {
                className: 'w-full md:w-1/2',
                children: (0, h.jsx)(z.J9, {
                  initialValues: {
                    name: '',
                    filter: '',
                    doc: '',
                    startDate: '',
                    endDate: '',
                    membership: '',
                    numMembership: '',
                    email: '',
                    typeSort: '',
                  },
                  onSubmit: function (e, s) {
                    var t = s.resetForm;
                    m((0, F.hr)(e)), t();
                  },
                  children: function (e) {
                    var s = e.values;
                    return (0, h.jsx)(z.l0, {
                      noValidate: !0,
                      children: (0, h.jsxs)('div', {
                        className: 'w-full md:w-[450px] 2xl:w-[500px] flex flex-col gap-4',
                        children: [
                          (0, h.jsxs)('div', {
                            className: 'w-full flex flex-col md:flex-row gap-4',
                            children: [
                              (0, h.jsxs)(S.M5, {
                                name: 'filter',
                                text: 'Filtrar por:',
                                textLabelClassName: 'text-white',
                                as: 'select',
                                className: 'select-sm w-full',
                                disabled: u,
                                children: [
                                  (0, h.jsx)('option', { value: '', children: 'Seleccione filtro' }),
                                  (0, h.jsx)('option', { value: '1', children: 'alfabético' }),
                                  (0, h.jsx)('option', { value: '2', children: 'Fecha' }),
                                  (0, h.jsx)('option', { value: '3', children: 'Membresía' }),
                                  (0, h.jsx)('option', { value: '4', children: 'Documento' }),
                                  (0, h.jsx)('option', { value: '5', children: 'Nombre' }),
                                  (0, h.jsx)('option', { value: '6', children: 'Correo' }),
                                ],
                              }),
                              '1' === s.filter &&
                                (0, h.jsxs)(S.M5, {
                                  name: 'typeSort',
                                  as: 'select',
                                  text: 'Ordenar por:',
                                  textLabelClassName: 'text-white',
                                  className: 'select-sm',
                                  disabled: u,
                                  children: [
                                    (0, h.jsx)('option', { value: '', disabled: !0, children: 'Seleccione uno' }),
                                    (0, h.jsx)('option', { value: 'ASC', children: 'Ascendente' }),
                                    (0, h.jsx)('option', { value: 'DESC', children: 'Descendente' }),
                                  ],
                                }),
                              '2' === s.filter &&
                                (0, h.jsxs)(h.Fragment, {
                                  children: [
                                    (0, h.jsx)(S.M5, {
                                      name: 'startDate',
                                      type: 'date',
                                      text: 'Fecha inicio',
                                      textLabelClassName: 'text-white',
                                      placeholder: 'Fecha Inicio',
                                      className: 'input-sm',
                                      disabled: u,
                                    }),
                                    (0, h.jsx)(S.M5, {
                                      name: 'endDate',
                                      type: 'date',
                                      text: 'Fecha Fin',
                                      textLabelClassName: 'text-white',
                                      placeholder: 'Fecha Fin',
                                      className: 'input-sm',
                                      disabled: u,
                                    }),
                                  ],
                                }),
                              '3' === s.filter &&
                                (0, h.jsxs)(S.M5, {
                                  name: 'membership',
                                  as: 'select',
                                  text: 'Membresía',
                                  textLabelClassName: 'text-white',
                                  className: 'select-sm',
                                  disabled: u,
                                  children: [
                                    (0, h.jsx)('option', {
                                      value: '',
                                      disabled: !0,
                                      children: 'Seleccione una opción',
                                    }),
                                    a &&
                                      a.length > 0 &&
                                      a.map(function (e, s) {
                                        return (
                                          'S/N' !== e.name && (0, h.jsx)('option', { value: e.id, children: e.name }, s)
                                        );
                                      }),
                                  ],
                                }),
                              '5' === s.filter &&
                                (0, h.jsx)(S.M5, {
                                  name: 'name',
                                  text: 'Nombres',
                                  textLabelClassName: 'text-white',
                                  placeholder: 'Ingrese los nombres',
                                  className: 'input-sm',
                                  disabled: u,
                                }),
                              '4' === s.filter &&
                                (0, h.jsx)(S.M5, {
                                  name: 'doc',
                                  text: 'Documento',
                                  textLabelClassName: 'text-white',
                                  placeholder: 'Ingrese documento',
                                  className: 'input-sm',
                                  disabled: u,
                                }),
                              '6' === s.filter &&
                                (0, h.jsx)(S.M5, {
                                  name: 'email',
                                  text: 'Correo',
                                  textLabelClassName: 'text-white',
                                  placeholder: 'Ingrese correo',
                                  className: 'input-sm',
                                  disabled: u,
                                }),
                            ],
                          }),
                          s.filter &&
                            (0, h.jsxs)('div', {
                              className: 'flex gap-4',
                              children: [
                                (0, h.jsxs)('button', {
                                  type: 'submit',
                                  disabled: u,
                                  className: 'btn btn-sm bg-blue-900 gap-3 w-[48%] mt-7 text-white ',
                                  children: [
                                    (0, h.jsx)('i', { className: 'fa-solid fa-magnifying-glass text-lg ' }),
                                    (0, h.jsx)('span', { className: 'font-bold', children: 'Buscar' }),
                                  ],
                                }),
                                (0, h.jsxs)('button', {
                                  type: 'button',
                                  disabled: u,
                                  onClick: function () {
                                    m((0, F.zK)());
                                  },
                                  className: 'btn btn-sm gap-3 w-[48%] mt-7 text-white ',
                                  children: [
                                    (0, h.jsx)('i', { className: 'fa-solid fa-rotate text-lg ' }),
                                    (0, h.jsx)('span', { className: 'font-bold', children: 'Recargar' }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    });
                  },
                }),
              }),
              (0, h.jsxs)('div', {
                className: 'text-white flex flex-col items-center',
                children: [
                  (0, h.jsxs)('span', {
                    className: 'rounded-2xl px-3 py-1 bg-gray-400 font-bold ',
                    children: ['Total de comisión $ ', d.toFixed(2)],
                  }),
                  (0, h.jsx)('small', { children: 'Mes actual' }),
                ],
              }),
            ],
          });
        },
        X = function () {
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Reporte de ventas' }),
              (0, h.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-[#001E36] min-h-[800px]',
                children: [
                  (0, h.jsx)('span', {
                    className:
                      'btn btn-ghost btn-sm px-7 border-2 border-white text-white p-2 cursor-pointer rounded-2xl',
                    children: 'Mis ventas',
                  }),
                  (0, h.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, h.jsx)(q, {}),
                  (0, h.jsx)('div', { className: 'mt-5', children: (0, h.jsx)(K, {}) }),
                ],
              }),
            ],
          });
        },
        G = t(87681),
        Q = t(507),
        Y = t(39711),
        ee = function () {
          return (0, h.jsx)('nav', {
            className: 'flex flex-col navAside bg-[#001E36] w-[250px]',
            children: (0, h.jsxs)('ul', {
              className: 'text-white',
              children: [
                (0, h.jsx)('li', {
                  children: (0, h.jsx)(Y.OL, {
                    to: '/seller/',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, h.jsx)('span', { children: 'Cotizador' }),
                  }),
                }),
                (0, h.jsx)('li', {
                  children: (0, h.jsx)(Y.OL, {
                    to: '/seller/promo',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, h.jsx)('span', { children: 'Promociones' }),
                  }),
                }),
                (0, h.jsx)('li', {
                  children: (0, h.jsx)(Y.OL, {
                    to: '/seller/chat',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, h.jsx)('span', { children: 'Chat' }),
                  }),
                }),
                (0, h.jsx)('li', {
                  children: (0, h.jsx)(Y.OL, {
                    to: '/seller/clients',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, h.jsx)('span', { children: 'Clientes' }),
                  }),
                }),
                (0, h.jsx)('li', {
                  children: (0, h.jsx)(Y.OL, {
                    to: '/seller/reports',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, h.jsx)('span', { children: 'Reporte de ventas' }),
                  }),
                }),
                (0, h.jsx)('li', {
                  className: 'cursor-pointer',
                  children: (0, h.jsx)(S.RD, { children: (0, h.jsx)('span', { children: 'Cerrar sesión' }) }),
                }),
              ],
            }),
          });
        },
        se = t(25976),
        te = t(11594),
        le = t(96599),
        ne = t(57562),
        ae = function () {
          var e = (0, i.v9)(function (e) {
              return e;
            }),
            s = e.user,
            t = s.img,
            n = s.name,
            a = s.lastName,
            r = e.seller.client,
            c = e.shopping.shopping,
            o = (0, l.s0)();
          return (0, h.jsxs)('div', {
            className: 'navbar bg-base-100 p-5 xl:px-32',
            children: [
              (0, h.jsxs)('div', {
                className: 'flex-1',
                children: [
                  (0, h.jsx)(Y.rU, {
                    to: '/',
                    className: ' normal-case text-xl landing__logo ml-5',
                    children: (0, h.jsx)('img', { src: se, alt: 'logo' }),
                  }),
                  (0, h.jsxs)('span', {
                    className: 'self-end hidden xl:block font-bold',
                    children: ['Hola, ', (0, ne.b)(n, a)],
                  }),
                ],
              }),
              (0, h.jsx)('div', {
                className: 'flex-none',
                children: (0, h.jsxs)('div', {
                  className: 'flex gap-4',
                  children: [
                    r.clientActive &&
                      (0, h.jsxs)('div', {
                        className: 'flex gap-1 bg-base-200 rounded-xl px-3 items-center',
                        children: [
                          (0, h.jsx)('span', { className: 'text-sm', children: r.clientActive.name }),
                          (0, h.jsx)('button', {
                            title: 'cart',
                            type: 'button',
                            className: 'btn btn-ghost btn-circle',
                            onClick: function () {
                              return o('/seller/shopping-cart');
                            },
                            children: (0, h.jsxs)('div', {
                              className: 'indicator',
                              children: [
                                (0, h.jsx)('i', { className: 'fa-solid fa-cart-shopping  text-xl' }),
                                (0, h.jsx)('span', {
                                  className: 'badge badge-sm badge-warning indicator-item',
                                  children: (null == c ? void 0 : c.length) || 0,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    (0, h.jsx)('div', {
                      className: 'dropdown dropdown-end flex ',
                      children: (0, h.jsx)(te.q, {
                        img: t,
                        children: (0, h.jsxs)('ul', {
                          tabIndex: 0,
                          className: 'menu menu-compact dropdown-content mt-12 p-2 shadow bg-base-100 rounded-box w-52',
                          children: [
                            (0, h.jsx)('li', {
                              children: (0, h.jsx)(Y.rU, { to: '/seller/profile', children: 'Perfil' }),
                            }),
                            (0, h.jsxs)('ul', {
                              className: 'xl:hidden',
                              children: [
                                (0, h.jsx)('li', {
                                  children: (0, h.jsx)(Y.rU, { to: '/seller/', children: 'Cotizador' }),
                                }),
                                (0, h.jsx)('li', {
                                  children: (0, h.jsx)(Y.rU, { to: '/seller/promo', children: 'Promociones' }),
                                }),
                                (0, h.jsx)('li', {
                                  children: (0, h.jsx)(Y.rU, { to: '/seller/chat', children: 'Chat' }),
                                }),
                                (0, h.jsx)('li', {
                                  children: (0, h.jsx)(Y.rU, { to: '/seller/clients', children: 'Clientes' }),
                                }),
                                (0, h.jsx)('li', {
                                  children: (0, h.jsx)(Y.rU, { to: '/seller/reports', children: 'Reporte de ventas' }),
                                }),
                              ],
                            }),
                            (0, h.jsx)('li', {
                              children: (0, h.jsx)(le.R, {
                                children: (0, h.jsx)('span', { children: 'Cerrar sesion' }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        re = function () {
          return (0, h.jsxs)('div', {
            className: 'animate__animated animate__fadeIn',
            children: [
              (0, h.jsx)(ae, {}),
              (0, h.jsxs)('div', {
                className: 'xl:px-32 flex items-start body-screen pt-10 bg-[#6B6CB0]',
                children: [
                  (0, h.jsx)('div', {
                    className: 'hidden xl:block xl:w-[300px] rounded-xl p-5 ',
                    children: (0, h.jsx)(ee, {}),
                  }),
                  (0, h.jsx)('div', {
                    className: 'w-full mx-4 xl:w-3/4 mb-10 md:mx-10',
                    children: (0, h.jsx)(l.j3, {}),
                  }),
                ],
              }),
              (0, h.jsx)(S.$_, {}),
            ],
          });
        },
        ie = t(69167),
        ce = function () {
          var e = (0, P.WH)({ area: 'logout' }).promiseInProgress,
            s = (0, i.I0)();
          return (
            (0, r.useEffect)(
              function () {
                s((0, Q.A)());
              },
              [s],
            ),
            (0, r.useEffect)(
              function () {
                s((0, F.kI)());
              },
              [s],
            ),
            (0, r.useEffect)(
              function () {
                s((0, F.IZ)());
              },
              [s],
            ),
            (0, r.useEffect)(
              function () {
                s((0, F.zK)());
              },
              [s],
            ),
            (0, r.useEffect)(function () {
              s((0, F.lX)());
            }, []),
            (0, h.jsx)('div', {
              children: e
                ? (0, h.jsx)(S.yI, {})
                : (0, h.jsxs)(l.Z5, {
                    children: [
                      (0, h.jsxs)(l.AW, {
                        element: (0, h.jsx)(re, {}),
                        children: [
                          (0, h.jsx)(l.AW, { index: !0, element: (0, h.jsx)(y, {}) }),
                          (0, h.jsx)(l.AW, { path: 'profile', element: (0, h.jsx)(S.BQ, {}) }),
                          (0, h.jsx)(l.AW, { path: 'promo', element: (0, h.jsx)(k, {}) }),
                          (0, h.jsx)(l.AW, { path: 'clients', element: (0, h.jsx)(V, {}) }),
                          (0, h.jsx)(l.AW, { path: 'reports', element: (0, h.jsx)(X, {}) }),
                          (0, h.jsx)(l.AW, { path: 'shopping-cart', element: (0, h.jsx)(ie.U, {}) }),
                          (0, h.jsx)(l.AW, { path: 'chat/*', element: (0, h.jsx)(G.W, {}) }),
                        ],
                      }),
                      (0, h.jsx)(l.AW, { path: '*', element: (0, h.jsx)(h.Fragment, { children: 'Estas perdido' }) }),
                    ],
                  }),
            })
          );
        };
      const oe = ce;
    },
    69167: (e, s, t) => {
      'use strict';
      t.d(s, { U: () => j });
      var l = t(70885),
        n = t(12164),
        a = t(94649),
        r = t(10615),
        i = t(23594),
        c = t(80653),
        o = t(85893),
        d = function (e) {
          var s = e.cart,
            t = e.index,
            l = e.uid,
            a = e.rol,
            d = e.clientActive,
            x = (0, i.I0)();
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
                      onClick: function () {
                        return (function (e) {
                          x((0, c.CX)(e, String(a && 'seller' === a ? (null == d ? void 0 : d.id) : l)));
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
                        s.img.map(function (e, s) {
                          return (0,
                          o.jsx)('div', { children: (0, o.jsx)('img', { src: e.replace('{size}', 'x500'), alt: 'hotel', className: 'h-[240px] object-cover rounded-xl' }) }, s);
                        }),
                    }),
                  }),
                  (0, o.jsxs)('div', {
                    className: 'text-gray-200 text-sm gap-4 flex flex-col md:flex-row w-full justify-between',
                    children: [
                      (0, o.jsxs)('div', {
                        className: 'bg-[#003C6B] rounded-xl p-4 flex flex-col items-end md:order-2 h-fit',
                        children: [
                          (0, o.jsxs)('span', {
                            className: 'block',
                            children: ['Precio: USD ', s.subtotal.toFixed(2)],
                          }),
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
        },
        x = t(67294),
        h = function (e) {
          var s = e.values,
            t = e.uid,
            l = e.rol,
            n = e.clientActive,
            r = (0, i.I0)();
          return (
            (0, x.useEffect)(
              function () {
                var e = s.cart.reduce(function (e, s) {
                  return e + s.total;
                }, 0);
                r((0, c.uj)(e));
              },
              [s, r],
            ),
            (0, o.jsx)(a.F2, {
              name: 'cart',
              render: function () {
                return (0, o.jsx)('div', {
                  children:
                    s.cart &&
                    s.cart.length > 0 &&
                    s.cart.map(function (e, s) {
                      return e && (0, o.jsx)(d, { cart: e, index: s, uid: t, rol: l, clientActive: n }, s);
                    }),
                });
              },
            })
          );
        },
        m = (t(83745), t(96974)),
        u = t(86455),
        p = t.n(u),
        j = function () {
          var e = (0, i.v9)(function (e) {
              return e;
            }),
            s = e.shopping,
            t = s.shopping,
            r = s.total,
            d = e.auth.uid,
            u = e.user.rol,
            j = e.seller.client.clientActive,
            f = (0, i.I0)(),
            b = (0, m.s0)(),
            v = (0, x.useState)({ total: 0, cart: [] }),
            N = (0, l.Z)(v, 2),
            g = N[0],
            w = N[1];
          (0, x.useEffect)(
            function () {
              t && w({ total: 0, cart: t });
            },
            [t, w],
          );
          return (0, o.jsx)('div', {
            className: 'p-5 flex justify-center',
            children: (0, o.jsxs)('div', {
              className: 'w-full xl:w-[1200px] mt-8',
              children: [
                (0, o.jsx)('span', { className: 'font-medium text-xl text-white ', children: 'Carrito' }),
                (0, o.jsx)('div', {
                  className: 'my-10 ',
                  children: (0, o.jsx)(a.J9, {
                    initialValues: g,
                    enableReinitialize: !0,
                    onSubmit: function (e) {
                      'seller' === u
                        ? p().fire(
                            'Carrito generado completamente',
                            'El carrito ha sido generado en la cuenta del cliente para finalizar el proceso de pago',
                            'info',
                          )
                        : e && ((e.total = r || 0), b('/client/payment'));
                    },
                    children: function (e) {
                      var s = e.values;
                      return (0, o.jsx)(a.l0, {
                        children:
                          t && (null == t ? void 0 : t.length) > 0
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
                                              children: ['N° items seleccionados: ', null == t ? void 0 : t.length],
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
                                              onClick: function () {
                                                return f((0, c.Oc)());
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
                                  (0, o.jsx)(h, { values: s, rol: u, uid: d, clientActive: j }),
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
      'use strict';
      t.d(s, { i: () => n });
      var l = t(85893),
        n = function () {
          return (0, l.jsx)('div', {
            className: 'flex flex-col gap-8',
            children: new Array(4).fill({}).map(function (e, s) {
              return (0,
              l.jsxs)('div', { className: 'w-full flex flex-col md:flex-row gap-4 bg-base-100 p-4 rounded-xl', children: [(0, l.jsx)('div', { className: 'skeleton-box rounded-xl h-[240px] w-full md:w-[350px] lg:w-[450px]' }), (0, l.jsxs)('div', { className: 'flex flex-col gap-2 w-full', children: [(0, l.jsx)('div', { className: 'skeleton-box w-full md:h-[40px] md:w-1/2 rounded-lg' }), (0, l.jsx)('div', { className: 'skeleton-box w-1/2 md:w-1/3 md:h-[20px] rounded-lg' }), (0, l.jsx)('div', { className: 'skeleton-box w-1/3 rounded-lg' })] }), (0, l.jsx)('div', { className: 'skeleton-box w-[80%] md:w-1/3 rounded-xl h-[100px]' })] }, s);
            }),
          });
        };
    },
    938: (e, s, t) => {
      'use strict';
      t.d(s, { C: () => r });
      var l = t(42982),
        n = t(70885),
        a = t(67294),
        r = function (e) {
          var s = (0, a.useState)(new Set()),
            t = (0, n.Z)(s, 2),
            r = t[0],
            i = t[1],
            c = (0, a.useState)(!1),
            o = (0, n.Z)(c, 2),
            d = o[0],
            x = o[1];
          return {
            handleChange: function (s) {
              var t = s.target,
                n = t.checked,
                a = t.value;
              e && e.length - 1 === r.size ? x(!0) : x(!1),
                i(
                  !0 === n
                    ? function (e) {
                        return new Set([].concat((0, l.Z)(e), [a]));
                      }
                    : function (e) {
                        return new Set(
                          (0, l.Z)(e).filter(function (e) {
                            return e !== a;
                          }),
                        );
                      },
                );
            },
            handleChangeMain: function (s) {
              var t = s.target.checked;
              if (
                (x(function (e) {
                  return !e;
                }),
                t && e)
              ) {
                var n = e.map(function (e) {
                  return JSON.stringify(e);
                });
                i(function (e) {
                  return new Set([].concat((0, l.Z)(e), (0, l.Z)(n)));
                });
              } else i(new Set());
            },
            isCheckedAll: d,
            checkList: r,
            resetCheckList: function () {
              return i(new Set());
            },
            resetCheckAll: function () {
              return x(!1);
            },
          };
        };
    },
    75220: () => {},
  },
]);
