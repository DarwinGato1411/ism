(self.webpackChunk = self.webpackChunk || []).push([
  [811],
  {
    62019: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { AdminRoutes: () => mt, default: () => ut });
      var s = n(96974),
        r = n(39711),
        i = n(85893),
        a = function () {
          var e = (0, s.TH)().pathname;
          return (0, i.jsxs)('ul', {
            className: 'flex gap-3 my-2',
            children: [
              (0, i.jsx)('li', {
                children: (0, i.jsx)(r.rU, {
                  to: '/admin/membership',
                  className: 'btn btn-ghost btn-sm px-7 border-2 border-gray-500 p-2 rounded-2xl  '.concat(
                    e.endsWith('membership') && 'subNavActive',
                  ),
                  children: 'Membresías',
                }),
              }),
              (0, i.jsx)('li', {
                children: (0, i.jsx)(r.rU, {
                  to: '/admin/membership/clients',
                  className: 'btn btn-ghost btn-sm px-7 border-2 border-gray-500 p-2 rounded-2xl '.concat(
                    e.endsWith('clients') && 'subNavActive',
                  ),
                  children: 'Clientes',
                }),
              }),
            ],
          });
        },
        l = n(4942);
      const c = n.p + '1540b1d9981e8b36871c.png';
      var o = n(40662),
        d = n(94649),
        m = n(19501),
        u = m.Ry({
          name: m
            .Z_()
            .trim()
            .min(2, 'Los caracteres mínimos permitidos son 2')
            .max(30, 'Los caracteres máximos permitidos son 30'),
          numMembership: m.Rx().typeError('El campo requiere un numero'),
          lastName: m
            .Z_()
            .trim()
            .min(2, 'Los caracteres mínimos permitidos son 2')
            .max(30, 'Los caracteres máximos permitidos son 30'),
          identification: m.Z_(),
        }),
        x = m.Ry({
          name: m
            .Z_()
            .trim()
            .min(2, 'Los caracteres mínimos permitidos son 2')
            .max(30, 'Los caracteres máximos permitidos son 30')
            .required('El nombre es necesario'),
          lastName: m
            .Z_()
            .trim()
            .min(2, 'Los caracteres mínimos permitidos son 2')
            .max(30, 'Los caracteres máximos permitidos son 30')
            .required('El apellido es necesario'),
          membershipInfo: m
            .IX(m.Ry({ id: m.Z_().required('El campo es necesario') }))
            .test('', 'Existen membresías que poseen un servicio asignado a un mismo proveedor', function (e) {
              var t = !0;
              if (!e || (e && e.length <= 0)) t = !0;
              else {
                var n = e
                    .map(function (e) {
                      e.id || (t = !0);
                      var n = (null == e ? void 0 : e.id) && JSON.parse(e.id),
                        s = [];
                      return n && (s = n.services), s;
                    })
                    .flat(),
                  s = n.map(function (e) {
                    return e.id;
                  }),
                  r =
                    null == n
                      ? void 0
                      : n.filter(function (e, t) {
                          var n = e.id;
                          return !(null != s && s.includes(n, t + 1));
                        });
                t = (null == n ? void 0 : n.length) === (null == r ? void 0 : r.length);
              }
              return t;
            }),
          doc: m
            .Z_()
            .matches(/^[0-9]+$/, 'El campo requiere unicamente dígitos')
            .required('El documento es necesario')
            .test('error length', 'Se requieren 10 caracteres', function (e) {
              return 10 === (null == e ? void 0 : e.length);
            }),
          email: m.Z_().trim().email('Formato de correo invalido').required('El correo es necesario'),
          seller: m.Z_().required('Selecciona un vendedor'),
        }),
        p = n(12164),
        h = m.Ry({
          name: m.Z_().trim().required('El campo es necesario'),
          exp: m
            .hT()
            .min((0, p.Z)(new Date()).subtract(1, 'days'), 'La membresía ha vencido')
            .required('La fecha de expiración es necesaria'),
          price: m.Rx().typeError('Unicamente números').required('El precio es necesario'),
          services: m
            .IX(
              m.Ry({
                provider: m.Z_().required('El campo es necesario'),
                service: m.Z_().required('El campo es necesario'),
                dsto: m
                  .Rx()
                  .typeError('Unicamente números')
                  .test('less than profit percent', 'Se supera el descuento global', function () {
                    var e = !0,
                      t = this.parent,
                      n = t.service,
                      s = t.dsto;
                    n && s && (e = JSON.parse(n).profit >= s);
                    return e;
                  }),
              }),
            )
            .test('Unique service', 'Existen servicios repetidos para un mismo motor', function (e) {
              var t =
                  null == e
                    ? void 0
                    : e.map(function (e) {
                        var t = e.provider,
                          n = e.service;
                        return JSON.stringify({ provider: t, service: n });
                      }),
                n =
                  null == e
                    ? void 0
                    : e.filter(function (e, n) {
                        var s = e.provider,
                          r = e.service;
                        return !(null != t && t.includes(JSON.stringify({ provider: s, service: r }), n + 1));
                      });
              return (null == e ? void 0 : e.length) === (null == n ? void 0 : n.length);
            }),
        }),
        f = n(86972),
        b = function (e) {
          var t = e.setOpenModal,
            n = e.title,
            s = e.active,
            r = void 0 !== s && s;
          return (0, i.jsxs)('div', {
            className: 'flex gap-2 items-center',
            children: [
              (0, i.jsx)('button', {
                title: 'Crear nuevo form',
                type: 'button',
                id: 'membresi_id_new',
                className: 'btn btn-circle btn-accent bg-green-600 btn-sm',
                onClick: function () {
                  return t(!0);
                },
                disabled: r,
                children: (0, i.jsx)('i', { className: 'fa-solid fa-plus text-xl text-white font-bold' }),
              }),
              (0, i.jsx)('label', {
                htmlFor: 'membresi_id_new',
                className: 'cursor-pointer underline  '.concat(r && 'text-gray-500'),
                children: n,
              }),
            ],
          });
        },
        j = n(70885),
        v = n(1480),
        g = n(67294),
        N = n(23594);
      function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var O = n(60897),
        C = n(16923);
      const k = function (e) {
        var t = e.values,
          n = e.providers,
          s = e.err;
        return (0, i.jsx)(d.F2, {
          name: 'services',
          render: function (e) {
            return (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)('button', {
                  type: 'button',
                  className: 'btn btn-primary btn-sm my-6 px-5',
                  onClick: function () {
                    return e.push({ provider: '', service: '', dsto: '' });
                  },
                  children: 'Agregar nuevo motor',
                }),
                (0, i.jsx)('div', {
                  className: '',
                  children:
                    s.services &&
                    'string' == typeof s.services &&
                    (0, i.jsxs)('span', { className: 'text-xs mt-3 text-red-500 block', children: ['* ', s.services] }),
                }),
                (0, i.jsx)('div', {
                  className: '',
                  children:
                    t.services &&
                    t.services.length > 0 &&
                    t.services.map(function (t, s) {
                      return (0, i.jsxs)(
                        'div',
                        {
                          children: [
                            (0, i.jsxs)('span', { className: 'text-sm', children: ['Motor ', s + 1] }),
                            (0, i.jsxs)('div', {
                              className: 'flex flex-col gap-2',
                              children: [
                                (0, i.jsxs)('div', {
                                  className: 'flex gap-2 items-center',
                                  children: [
                                    (0, i.jsxs)(O.M, {
                                      as: 'select',
                                      name: 'services['.concat(s, '].provider'),
                                      className: 'select',
                                      children: [
                                        (0, i.jsx)('option', { value: '', children: 'Selecciona un motor' }),
                                        n.map(function (e, t) {
                                          var n = e.name,
                                            s = e.id;
                                          return (0, i.jsx)('option', { value: s, children: n }, t);
                                        }),
                                      ],
                                    }),
                                    s > 0 &&
                                      (0, i.jsx)('div', {
                                        className: 'tooltip tooltip-left',
                                        'data-tip': 'Eliminar motor',
                                        children: (0, i.jsx)('button', {
                                          type: 'button',
                                          className: 'btn btn-ghost border border-primary',
                                          onClick: function () {
                                            return e.remove(s);
                                          },
                                          children: '-',
                                        }),
                                      }),
                                  ],
                                }),
                                (0, i.jsx)('div', {
                                  children:
                                    t.provider &&
                                    n &&
                                    (0, i.jsxs)('div', {
                                      className: 'flex gap-2',
                                      children: [
                                        (0, i.jsxs)(O.M, {
                                          as: 'select',
                                          name: 'services['.concat(s, '].service'),
                                          children: [
                                            (0, i.jsx)('option', {
                                              value: '',
                                              disabled: !0,
                                              children: 'selecciona un servicio',
                                            }),
                                            n
                                              .filter(function (e) {
                                                var n = e.id;
                                                return t.provider === n;
                                              })
                                              .map(function (e) {
                                                return e.services.map(function (e, t) {
                                                  return (0,
                                                  i.jsx)('option', { value: JSON.stringify(e), children: e.name }, t);
                                                });
                                              }),
                                          ],
                                        }),
                                        (0, i.jsx)(O.M, {
                                          name: 'services['.concat(s, '].dsto'),
                                          placeholder: '% dsto',
                                          autoComplete: 'off',
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
              ],
            });
          },
        });
      };
      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var I = function () {
          var e = (function () {
              var e = (0, g.useState)(!1),
                t = (0, j.Z)(e, 2),
                n = t[0],
                s = t[1],
                r = (0, g.useRef)(null),
                i = (0, g.useRef)(null),
                a = (0, v.X)({ refImg: i, inputImgRef: r }),
                l = a.handleChangeImg,
                c = a.handleOpenInputImg,
                o = (0, N.I0)(),
                d = {
                  name: '',
                  exp: '',
                  price: '',
                  img: null,
                  code: '',
                  services: [{ provider: '', service: '', dsto: '' }],
                },
                m = (0, N.v9)(function (e) {
                  return e;
                }),
                u = m.admin.membership,
                x = u.active,
                p = u.list,
                h = m.provider.list,
                b = (0, g.useState)(d),
                y = (0, j.Z)(b, 2),
                O = y[0],
                C = y[1];
              return (
                (0, g.useEffect)(
                  function () {
                    x &&
                      (s(!0),
                      C(function (e) {
                        return w(w({}, e), x);
                      }));
                  },
                  [x],
                ),
                {
                  openModal: n,
                  setOpenModal: s,
                  active: x,
                  init: O,
                  dispatch: o,
                  setInit: C,
                  initState: d,
                  handleOpenInputImg: c,
                  refImg: i,
                  handleCancelAction: function () {
                    s(!1), C(d), o((0, f.e9)(void 0));
                  },
                  handleDeleteItem: function () {
                    s(!1), C(d), o((0, f.Qp)());
                  },
                  inputImgRef: r,
                  ListMembership: p,
                  handleSuspense: function (e) {
                    o((0, f.jJ)(e));
                  },
                  handleChangeImg: l,
                  listProviders: h,
                }
              );
            })(),
            t = e.openModal,
            n = e.setOpenModal,
            s = e.active,
            r = e.dispatch,
            a = e.setInit,
            l = e.init,
            m = e.handleOpenInputImg,
            u = e.refImg,
            x = e.initState,
            y = e.handleCancelAction,
            P = e.handleChangeImg,
            I = e.inputImgRef,
            M = e.handleSuspense,
            E = e.listProviders,
            D = (0, C.WH)({ area: 'membershipUpdateState' }).promiseInProgress;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(b, { setOpenModal: n, title: 'Crear nueva membresía' }),
              (0, i.jsx)(o.u_, {
                openModal: t,
                children: (0, i.jsx)('div', {
                  className: 'flex flex-col justify-center items-center ',
                  children: D
                    ? (0, i.jsx)('div', {
                        className: 'min-h-[50vh] grid place-content-center',
                        children: (0, i.jsx)(o.s_, {}),
                      })
                    : (0, i.jsxs)('div', {
                        children: [
                          (0, i.jsx)('p', {
                            className: 'text-center text-xl my-5',
                            children: s ? 'Detalle membresía '.concat(s.name) : 'Nueva membresía',
                          }),
                          (0, i.jsx)(d.J9, {
                            initialValues: l,
                            onSubmit: function (e, t) {
                              var i = t.resetForm;
                              s ? (r((0, f.H)(e)), a(x)) : (r((0, f.VF)(e)), i()), n(!1);
                            },
                            validationSchema: h,
                            enableReinitialize: !0,
                            children: function (e) {
                              var t = e.setFieldValue,
                                n = e.errors,
                                r = e.values,
                                a = e.resetForm;
                              return (0, i.jsxs)(d.l0, {
                                className: 'w-full',
                                children: [
                                  (0, i.jsxs)('div', {
                                    className: 'my-4 cursor-pointer w-[120px] h-[100px] flex flex-col justify-between',
                                    onClick: m,
                                    children: [
                                      (0, i.jsx)('span', { className: 'text-sm block ', children: 'Diseño tarjeta' }),
                                      (0, i.jsx)('img', {
                                        ref: u,
                                        src: r.img ? ''.concat('http://ism.urgiz.com:4000', '/').concat(r.img) : c,
                                        alt: '',
                                        className: 'w-[100px] rounded-lg object-cover block',
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)('div', {
                                    className: 'flex flex-col gap-6',
                                    children: [
                                      (0, i.jsxs)('div', {
                                        className: 'flex flex-col gap-4  md:flex-row',
                                        children: [
                                          (0, i.jsxs)('div', {
                                            className: 'flex flex-col md:w-1/2',
                                            children: [
                                              (0, i.jsx)(O.M, {
                                                name: 'name',
                                                placeholder: 'Ingrese nombre de membresía',
                                                text: 'Nombre membresía',
                                                autoComplete: 'off',
                                              }),
                                              (0, i.jsx)(O.M, {
                                                name: 'code',
                                                placeholder: 'Código de membresía',
                                                text: 'Código membresía',
                                                autoComplete: 'off',
                                              }),
                                              (0, i.jsxs)('div', {
                                                className: 'mt-4 flex justify-between gap-2',
                                                children: [
                                                  (0, i.jsx)(O.M, {
                                                    name: 'exp',
                                                    type: 'date',
                                                    min: (0, p.Z)(new Date()).format('yyyy-MM-DD'),
                                                    text: 'Vencimiento',
                                                  }),
                                                  (0, i.jsx)(O.M, {
                                                    name: 'price',
                                                    text: 'Precio',
                                                    placeholder: '1200 USD',
                                                    autoComplete: 'off',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, i.jsx)('div', {
                                            className: 'mt-4 md:mt-0 flex flex-col gap-4 md:w-1/2',
                                            children: E && (0, i.jsx)(k, { values: r, providers: E, err: n }),
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)('div', {
                                        className: 'flex flex-col justify-between gap-4 md:flex-row md:pr-4 '.concat(
                                          s && 'md:flex-wrap',
                                        ),
                                        children: [
                                          (0, i.jsx)('button', {
                                            type: 'button',
                                            className: 'btn btn-base md:w-1/2',
                                            onClick: function () {
                                              y(), a();
                                            },
                                            children: 'Cancelar',
                                          }),
                                          s &&
                                            (null == s ? void 0 : s.state) &&
                                            (0, i.jsxs)('button', {
                                              type: 'button',
                                              className: 'btn btn-base md:flex-1 bg-[#6B6CB0] border-0 gap-3',
                                              onClick: function () {
                                                return M(S(S({}, r), {}, { state: !1 }));
                                              },
                                              children: [
                                                (0, i.jsx)('i', { className: 'fa-solid fa-plug text-base' }),
                                                'Suspender',
                                              ],
                                            }),
                                          s &&
                                            !(null != s && s.state) &&
                                            (0, i.jsxs)('button', {
                                              type: 'button',
                                              className: 'btn btn-base md:flex-1 bg-red-500 border-0 gap-3',
                                              onClick: function () {
                                                return M(S(S({}, r), {}, { state: !0 }));
                                              },
                                              children: [
                                                (0, i.jsx)('i', { className: 'fa-solid fa-plug text-base' }),
                                                'Activar',
                                              ],
                                            }),
                                          s
                                            ? (0, i.jsxs)('button', {
                                                type: 'submit',
                                                className: 'btn btn-primary btn-base md:w-1/2 gap-3',
                                                children: [
                                                  (0, i.jsx)('i', { className: 'fa-solid fa-pencil text-sm' }),
                                                  'Modificar',
                                                ],
                                              })
                                            : (0, i.jsxs)('button', {
                                                type: 'submit',
                                                className: 'btn btn-primary btn-base md:w-1/2 gap-3',
                                                children: [
                                                  (0, i.jsx)('i', { className: 'fa-solid fa-pencil text-sm' }),
                                                  'Crear',
                                                ],
                                              }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)('input', {
                                    title: 'inputImg',
                                    id: 'file',
                                    name: 'img',
                                    type: 'file',
                                    ref: I,
                                    onChange: function (e) {
                                      return P(e, t);
                                    },
                                    className: 'hidden',
                                  }),
                                ],
                              });
                            },
                          }),
                        ],
                      }),
                }),
              }),
            ],
          });
        },
        M = n(8817),
        E = function () {
          var e = (0, N.v9)(function (e) {
              return e.admin.membership;
            }).list,
            t = (0, N.I0)(),
            n = (0, C.WH)({ area: 'membershipList' }).promiseInProgress;
          return (0, i.jsx)('div', {
            children: n
              ? (0, i.jsx)('div', {
                  className: 'min-h-[60vh] w-full grid place-content-center',
                  children: (0, i.jsx)(M.s, {}),
                })
              : (0, i.jsx)('div', {
                  className: 'mt-10 p-2 flex flex-col gap-5',
                  children:
                    e && e.length > 0
                      ? null == e
                        ? void 0
                        : e.map(function (e, n) {
                            var s;
                            return (
                              's/n' !== (null === (s = e.name) || void 0 === s ? void 0 : s.toLocaleLowerCase()) &&
                              (0, i.jsxs)(
                                'div',
                                {
                                  className: 'shadow-xl flex justify-between items-center p-5 rounded-xl cardx',
                                  children: [
                                    (0, i.jsxs)('div', {
                                      className: 'flex gap-4 items-center',
                                      children: [
                                        (0, i.jsx)('img', {
                                          src: e.img ? ''.concat('http://ism.urgiz.com:4000', '/').concat(e.img) : c,
                                          alt: 'card',
                                          className: 'w-[75px]',
                                        }),
                                        (0, i.jsxs)('div', {
                                          children: [
                                            (0, i.jsx)('p', { children: e.name }),
                                            (0, i.jsx)('p', {
                                              className: 'underline text-sm text-blue-500 cursor-pointer ',
                                              onClick: function () {
                                                return (function (e) {
                                                  t((0, f.e9)(e));
                                                })(e);
                                              },
                                              children: 'Ver detalles',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)('i', { className: 'fa-solid fa-check mr-4 text-xl' }),
                                  ],
                                },
                                n,
                              )
                            );
                          })
                      : (0, i.jsx)('div', {
                          className: 'flex items-center justify-center h-[500px]',
                          children: (0, i.jsx)('span', { children: 'No existen membresías' }),
                        }),
                }),
          });
        },
        D = n(86455),
        A = n.n(D);
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      var _ = function () {
          var e = (0, N.v9)(function (e) {
              return e.admin.client;
            }).select,
            t = (0, N.I0)(),
            n = (0, g.useCallback)(
              function () {
                return !e || e.length <= 0
                  ? A().fire('Error!', 'No existen clientes seleccionados', 'error')
                  : t((0, f.vP)(e));
              },
              [e, t],
            ),
            s = (0, g.useCallback)(
              function (n) {
                return 0 === (null == e ? void 0 : e.length)
                  ? A().fire('Error!', 'No existen clientes seleccionados', 'error')
                  : A()
                      .fire({
                        title: 'Deseas '.concat(n ? 'activar' : 'suspender', ' los clientes seleccionados?'),
                        text: 'Se han seleccionado '
                          .concat(null == e ? void 0 : e.length, ' ')
                          .concat(1 === (null == e ? void 0 : e.length) ? 'cliente' : 'clientes'),
                        showCancelButton: !0,
                        showConfirmButton: !0,
                        confirmButtonText: n ? 'Activar' : 'Suspender',
                        cancelButtonText: 'Cancelar',
                      })
                      .then(function (s) {
                        s.isConfirmed && e && t((0, f.IM)(n));
                      });
              },
              [e, t],
            ),
            r = (0, g.useCallback)(
              function () {
                return 0 === (null == e ? void 0 : e.length)
                  ? A().fire('Error!', 'No existen clientes seleccionados', 'error')
                  : e && e.length > 1
                  ? A().fire('Proceso no completado!', 'Solo puedes seleccionar un cliente', 'warning')
                  : t((0, f.Rc)(!0));
              },
              [e, t],
            ),
            i = (0, g.useState)(!1),
            a = (0, j.Z)(i, 2),
            c = a[0],
            o = a[1],
            d = (0, N.v9)(function (e) {
              return e.admin.client;
            }).clientActive,
            m = {
              name: '',
              lastName: '',
              email: '',
              state: !0,
              seller: '',
              doc: '',
              membershipInfo: [{ id: '', name: '' }],
            },
            u = (0, g.useState)(m),
            x = (0, j.Z)(u, 2),
            p = x[0],
            h = x[1];
          (0, g.useEffect)(
            function () {
              d &&
                (o(!0),
                h(
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? Z(Object(n), !0).forEach(function (t) {
                            (0, l.Z)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : Z(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                    }
                    return e;
                  })({}, d),
                ));
            },
            [d, o, h],
          );
          return {
            select: e,
            restablecerPassword: n,
            suspendClient: s,
            editClient: r,
            openModal: c,
            setOpenModal: o,
            initialState: m,
            init: p,
            setInit: h,
            handleCancelOption: function () {
              o(!1), t((0, f.Rc)(void 0)), t((0, f.a5)(!0)), d && h(m);
            },
            clientActive: d,
            dispatch: t,
          };
        },
        R = n(11485),
        L = n(37043),
        q = function () {
          var e = _(),
            t = e.suspendClient,
            n = e.editClient,
            s = e.dispatch,
            r = (0, N.v9)(function (e) {
              return e.admin.membership;
            }).list,
            a = (0, C.WH)({ area: 'clients_admin' }).promiseInProgress;
          return (0, i.jsx)(d.J9, {
            initialValues: { name: '', membership: '', doc: '', lastName: '' },
            onSubmit: function (e) {
              s((0, R.jq)(e));
            },
            validationSchema: u,
            children: function (e) {
              var l = e.resetForm;
              return (0, i.jsxs)(d.l0, {
                className: 'w-full',
                children: [
                  (0, i.jsxs)('div', {
                    className: 'flex flex-col md:flex-row w-full gap-3',
                    children: [
                      (0, i.jsxs)(o.M5, {
                        name: 'membership',
                        as: 'select',
                        text: 'Membresía',
                        className: 'select-sm',
                        disabled: a,
                        autoComplete: 'off',
                        children: [
                          (0, i.jsx)('option', { value: '', children: 'Seleccionar membresía' }),
                          null == r
                            ? void 0
                            : r.map(function (e, t) {
                                var n = e.id,
                                  s = e.name;
                                return e.state && (0, i.jsx)('option', { value: n, children: s }, t);
                              }),
                        ],
                      }),
                      (0, i.jsx)(o.M5, {
                        name: 'name',
                        text: 'Nombre',
                        placeholder: 'Ingresa el nombre',
                        className: 'input-sm',
                        disabled: a,
                        autoComplete: 'off',
                      }),
                      (0, i.jsx)(o.M5, {
                        name: 'lastName',
                        text: 'Apellido',
                        placeholder: 'Ingresa el apellido',
                        className: 'input-sm',
                        disabled: a,
                        autoComplete: 'off',
                      }),
                      (0, i.jsx)(o.M5, {
                        name: 'doc',
                        text: 'Documento',
                        placeholder: 'Ingresa el documento',
                        className: 'input-sm',
                        disabled: a,
                        autoComplete: 'off',
                      }),
                      (0, i.jsx)('div', {
                        className: 'tooltip mt-6',
                        'data-tip': 'recargar',
                        children: (0, i.jsx)('button', {
                          type: 'button',
                          className: 'btn btn-sm btn-circle ',
                          onClick: function () {
                            l(), s((0, L.m)(1)), s((0, L.c)('clients'));
                          },
                          children: (0, i.jsx)('i', { className: 'fa-solid fa-repeat' }),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)('div', {
                    className: 'flex w-full flex-wrap justify-between gap-3 mt-4',
                    children: [
                      (0, i.jsxs)('button', {
                        type: 'submit',
                        className: 'btn gap-3 btn-sm w-full lg:w-[350px]  2xl:w-1/4  bg-blue-900 border-0',
                        disabled: a,
                        children: [(0, i.jsx)('i', { className: 'fa-solid fa-magnifying-glass text-base' }), 'Buscar'],
                      }),
                      (0, i.jsxs)('button', {
                        type: 'button',
                        className: 'btn gap-2 btn-sm w-full lg:w-[350px]  2xl:w-1/4  bg-red-500 border-0',
                        onClick: function () {
                          return t(!1);
                        },
                        disabled: a,
                        children: [(0, i.jsx)('i', { className: 'fa-solid fa-plug text-base' }), 'Suspender'],
                      }),
                      (0, i.jsxs)('button', {
                        type: 'button',
                        className: 'btn gap-2 btn-sm w-full lg:w-[350px]  2xl:w-1/4  bg-[#6B6CB0] border-0',
                        onClick: function () {
                          return t(!0);
                        },
                        disabled: a,
                        children: [(0, i.jsx)('i', { className: 'fa-solid fa-user-lock' }), 'Activar'],
                      }),
                      (0, i.jsxs)('button', {
                        type: 'button',
                        className: 'btn gap-2 btn-sm w-full md:w-[350px]  2xl:w-1/4  bg-sky-600 border-0',
                        onClick: n,
                        disabled: a,
                        children: [(0, i.jsx)('i', { className: 'fa-solid fa-pen-to-square text-base' }), 'Modificar'],
                      }),
                    ],
                  }),
                ],
              });
            },
          });
        },
        F = function (e) {
          var t = e.totalReg,
            n = e.numPageByReg,
            s = void 0 === n ? 10 : n,
            r = e.step,
            a = void 0 === r ? 3 : r,
            l = (0, N.v9)(function (e) {
              return e.utils;
            }).page,
            c = (0, N.I0)(),
            o = (0, g.useState)(1),
            d = (0, j.Z)(o, 2),
            m = d[0],
            u = d[1],
            x = (0, g.useState)([]),
            p = (0, j.Z)(x, 2),
            h = p[0],
            f = p[1],
            b = (0, g.useState)(null),
            v = (0, j.Z)(b, 2),
            y = v[0],
            w = v[1],
            O = (0, g.useState)((l || 1) - 1),
            C = (0, j.Z)(O, 2),
            k = C[0],
            P = C[1];
          return (
            (0, g.useEffect)(
              function () {
                u(Math.ceil(t / s));
              },
              [t, s, u],
            ),
            (0, g.useEffect)(
              function () {
                for (var e = [], t = 1; t <= m; t++) e.push(t);
                f(e);
              },
              [f, m],
            ),
            (0, g.useEffect)(
              function () {
                l && 1 !== l && ((l - 1) % 3 == 0 ? P(l - 1) : l % 3 == 0 && P(l - 3));
              },
              [y, l, P],
            ),
            (0, i.jsxs)('div', {
              className: 'btn-group',
              children: [
                (0, i.jsx)('button', {
                  title: 'Primero',
                  type: 'button',
                  className: 'btn',
                  onClick: function () {
                    c((0, L.m)(1)), P(0);
                  },
                  children: (0, i.jsx)('i', { className: 'fa-solid fa-angles-left' }),
                }),
                (0, i.jsx)('button', {
                  title: 'Anterior',
                  type: 'button',
                  className: 'btn',
                  onClick: function () {
                    l && l > 1 && (w('decrement'), c((0, L.m)(l - 1)));
                  },
                  children: (0, i.jsx)('i', { className: 'fa-solid fa-angle-left' }),
                }),
                h.slice(k, k + a).map(function (e, t) {
                  return (0, i.jsx)(
                    'button',
                    {
                      title: 'Página '.concat(e),
                      type: 'button',
                      className: 'btn '.concat(l === e && 'btn_active_pag'),
                      onClick: function () {
                        return c((0, L.m)(e));
                      },
                      children: e,
                    },
                    t,
                  );
                }),
                (0, i.jsx)('button', {
                  title: 'Siguiente',
                  type: 'button',
                  className: 'btn',
                  onClick: function () {
                    l && l < m && c((0, L.m)(l + 1));
                  },
                  children: (0, i.jsx)('i', { className: 'fa-solid fa-angle-right' }),
                }),
                (0, i.jsx)('button', {
                  title: 'Último',
                  type: 'button',
                  className: 'btn',
                  onClick: function () {
                    c((0, L.m)(m)), P(l && l > a ? m - a : m - 2);
                  },
                  children: (0, i.jsx)('i', { className: 'fa-solid fa-angles-right' }),
                }),
              ],
            })
          );
        },
        W = n(42982),
        H = n(57749),
        V = function (e) {
          var t = e.promiseInProgress,
            n = e.list,
            s = e.selectReset,
            r = (0, N.I0)();
          if (!n) return (0, i.jsx)('div', {});
          var a = (0, H.M)(n, { key: 'id', keyType: 'string' }),
            l = a.handleCheck,
            c = a.isCheckedAll,
            o = a.checkedItems,
            d = a.setCheckedItems;
          return (
            (0, g.useEffect)(
              function () {
                s && (d(new Set()), r((0, f.a5)(!1)));
              },
              [s, r],
            ),
            (0, g.useEffect)(
              function () {
                r((0, f.Ll)((0, W.Z)(o)));
              },
              [r, o],
            ),
            (0, i.jsx)('div', {
              className: 'min-h-[65vh] overflow-auto scroll_list '.concat(!t && 'bg-gradient-banner'),
              children: (0, i.jsx)('div', {
                className: 'table-container w-full',
                children: (0, i.jsxs)('table', {
                  className: 'table text-white w-full',
                  children: [
                    (0, i.jsx)('thead', {
                      children: (0, i.jsxs)('tr', {
                        children: [
                          (0, i.jsx)('th', {
                            children: (0, i.jsx)('input', {
                              title: 'checkbox all',
                              type: 'checkbox',
                              onChange: l,
                              checked: c,
                              className: 'checkbox checkbox-sm checkbox-primary',
                            }),
                          }),
                          (0, i.jsx)('th', { children: 'Nombre' }),
                          (0, i.jsx)('th', { children: 'Apellido' }),
                          (0, i.jsx)('th', { children: 'Identificación' }),
                          (0, i.jsx)('th', { children: 'Correo' }),
                          (0, i.jsx)('th', { children: 'Estado' }),
                        ],
                      }),
                    }),
                    (0, i.jsx)('tbody', {
                      children: n.map(function (e, t) {
                        var n = e.id,
                          s = e.name,
                          r = e.lastName,
                          a = e.doc,
                          c = e.email,
                          d = e.state;
                        return (0,
                        i.jsxs)('tr', { children: [(0, i.jsx)('td', { children: (0, i.jsx)('input', { title: 'checkbox item', type: 'checkbox', 'data-key': n, onChange: l, checked: o.has(n), className: 'checkbox checkbox-sm checkbox-primary' }) }), (0, i.jsx)('td', { children: s }), (0, i.jsx)('td', { children: r }), (0, i.jsx)('td', { children: a }), (0, i.jsx)('td', { children: c }), (0, i.jsx)('td', { children: d ? 'Activo' : 'Suspendido' })] }, t);
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        J = function () {
          var e = (0, N.I0)(),
            t = (0, N.v9)(function (e) {
              return e;
            }).admin.client,
            n = t.list,
            s = t.selectReset;
          (0, g.useEffect)(
            function () {
              e((0, L.m)(1)), e((0, L.c)('clients'));
            },
            [e, L.m],
          );
          var r = (0, C.WH)({ area: 'clients_admin' }).promiseInProgress;
          return (0, i.jsxs)('div', {
            className: 'flex flex-col',
            children: [
              (0, i.jsx)('div', {
                children: r
                  ? (0, i.jsx)('div', {
                      className: 'min-h-[60vh] grid place-content-center',
                      children: (0, i.jsx)(o.s_, {}),
                    })
                  : (0, i.jsx)('div', {
                      className: 'flex flex-col',
                      children: (0, i.jsx)(V, {
                        promiseInProgress: r,
                        list: (null == n ? void 0 : n.accounts) || [],
                        selectReset: s,
                      }),
                    }),
              }),
              (null == n ? void 0 : n.accounts) &&
                n.accounts.length > 0 &&
                (null == n ? void 0 : n.totalResults) &&
                -1 !== (null == n ? void 0 : n.totalResults) &&
                (0, i.jsx)('div', {
                  className: 'mt-10  self-end '.concat(r && 'hidden'),
                  children: (0, i.jsx)(F, { totalReg: (null == n ? void 0 : n.totalResults) || 0 }),
                }),
            ],
          });
        };
      const U = function (e) {
        var t = e.values,
          n = e.membershipList,
          s = e.errors;
        return (0, i.jsx)(d.F2, {
          name: 'membershipInfo',
          render: function (e) {
            return (0, i.jsxs)('div', {
              className: 'w-full',
              children: [
                (0, i.jsx)('button', {
                  type: 'button',
                  className: 'btn btn-primary btn-sm my-5 px-5',
                  onClick: function () {
                    return e.push({ id: '', name: '' });
                  },
                  children: 'Agregar nueva membresía',
                }),
                s.membershipInfo &&
                  'string' == typeof s.membershipInfo &&
                  (0, i.jsxs)('span', { className: 'text-xs text-red-500 block', children: ['* ', s.membershipInfo] }),
                t.membershipInfo &&
                  t.membershipInfo.length > 0 &&
                  t.membershipInfo.map(function (t, s) {
                    var r = null == t ? void 0 : t.name.toLowerCase();
                    if (t.id && 25 === t.id.length && n) {
                      var a = n.find(function (e) {
                        return e.id === t.id;
                      });
                      t.id = JSON.stringify(a);
                    }
                    return (
                      's/n' !== r &&
                      (0, i.jsxs)(
                        'div',
                        {
                          className: 'flex justify-between gap-2 mt-2 items-center',
                          children: [
                            (0, i.jsxs)(o.M5, {
                              name: 'membershipInfo['.concat(s, '].id'),
                              as: 'select',
                              text: 'Membresía',
                              className: 'select-sm',
                              autoComplete: 'off',
                              children: [
                                (0, i.jsx)('option', { value: '', disabled: !0, children: 'Seleccionar membresía' }),
                                null == n
                                  ? void 0
                                  : n.map(function (e, t) {
                                      var n;
                                      return (
                                        e.state &&
                                        's/n' !==
                                          (null === (n = e.name) || void 0 === n ? void 0 : n.toLocaleLowerCase()) &&
                                        (0, i.jsx)('option', { value: JSON.stringify(e), children: e.name }, t)
                                      );
                                    }),
                              ],
                            }),
                            (0, i.jsx)('div', {
                              className: 'tooltip mt-6 tooltip-left',
                              'data-tip': 'Eliminar membresía',
                              children: (0, i.jsx)('button', {
                                title: 'Eliminar membresía',
                                type: 'button',
                                className: 'btn btn-circle btn-outline btn-primary btn-sm',
                                onClick: function () {
                                  return e.remove(s);
                                },
                                children: (0, i.jsx)('i', { className: 'fa-solid fa-minus' }),
                              }),
                            }),
                          ],
                        },
                        s,
                      )
                    );
                  }),
              ],
            });
          },
        });
      };
      function T(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var X = function () {
          var e = _(),
            t = e.openModal,
            n = e.setOpenModal,
            s = e.clientActive,
            r = e.handleCancelOption,
            a = e.init,
            l = (0, N.I0)(),
            c = (0, N.v9)(function (e) {
              return e.admin;
            }),
            m = c.seller.allSellers,
            u = c.membership.list;
          (0, g.useEffect)(
            function () {
              m || l((0, f.Xf)());
            },
            [m, l],
          );
          var p = (0, C.WH)({ area: 'clients_admin' }).promiseInProgress,
            h = (0, C.WH)({ area: 'All_sellers_admin' }).promiseInProgress;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(b, { setOpenModal: n, title: 'Crear nuevo cliente', active: p }),
              (0, i.jsx)(o.u_, {
                openModal: t,
                children: (0, i.jsxs)('div', {
                  className: 'flex flex-col justify-center items-center',
                  children: [
                    (0, i.jsx)('p', {
                      className: 'text-center text-xl',
                      children: s ? 'Detalles cliente existente' : 'Nuevo cliente',
                    }),
                    (0, i.jsx)(d.J9, {
                      initialValues: a,
                      onSubmit: function (e, t) {
                        var n,
                          i = t.resetForm,
                          a =
                            null == e || null === (n = e.membershipInfo) || void 0 === n
                              ? void 0
                              : n.map(function (e) {
                                  return B(B({}, e), {}, { id: JSON.parse(e.id).id });
                                });
                        (e.membershipInfo = a), l(s ? (0, f.oS)(B({}, e)) : (0, f.Jr)(e)), r(), i();
                      },
                      validationSchema: x,
                      enableReinitialize: !0,
                      children: function (e) {
                        var t = e.values,
                          n = e.resetForm,
                          a = e.errors;
                        return (0, i.jsxs)(d.l0, {
                          className: 'w-full md:px-20 mt-5',
                          children: [
                            (0, i.jsxs)('div', {
                              className: 'w-full flex flex-col gap-5 my-5 md:flex-row',
                              children: [
                                (0, i.jsxs)('div', {
                                  className: 'w-full md:w-1/2',
                                  children: [
                                    (0, i.jsx)(o.M5, {
                                      name: 'name',
                                      autoComplete: 'off',
                                      text: 'Nombre',
                                      placeholder: 'Ingresa el nombre',
                                      disabled: p,
                                    }),
                                    (0, i.jsx)(o.M5, {
                                      name: 'lastName',
                                      autoComplete: 'off',
                                      text: 'Apellido',
                                      placeholder: 'Ingresa el apellido',
                                      disabled: p,
                                    }),
                                    (0, i.jsx)(o.M5, {
                                      name: 'doc',
                                      autoComplete: 'off',
                                      text: 'Documento',
                                      placeholder: 'Documento',
                                      disabled: p,
                                    }),
                                    (0, i.jsx)(o.M5, {
                                      name: 'email',
                                      autoComplete: 'off',
                                      type: 'email',
                                      text: 'Correo electrónico',
                                      placeholder: 'Ingresa el correo',
                                      disabled: p,
                                    }),
                                    (0, i.jsxs)(o.M5, {
                                      name: 'seller',
                                      autoComplete: 'off',
                                      as: 'select',
                                      text: 'Asignar vendedor',
                                      disabled: p || h,
                                      children: [
                                        (0, i.jsx)('option', {
                                          value: '',
                                          disabled: !0,
                                          children: 'Seleccionar vendedor',
                                        }),
                                        m &&
                                          m.map(function (e, t) {
                                            var n = e.id,
                                              s = e.person;
                                            return (0, i.jsx)(
                                              'option',
                                              {
                                                value: n,
                                                children: ''
                                                  .concat(null == s ? void 0 : s.name, ' ')
                                                  .concat(null == s ? void 0 : s.lastName, ' - (')
                                                  .concat(null == s ? void 0 : s.typeSeller, ')'),
                                              },
                                              t,
                                            );
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsx)('div', {
                                  className: 'flex flex-col gap-2 md:w-1/2',
                                  children: (0, i.jsx)(U, { values: t, errors: a, membershipList: u }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)('div', {
                              className: 'flex flex-col justify-between gap-4 md:flex-row md:pr-4',
                              children: [
                                (0, i.jsx)('button', {
                                  type: 'button',
                                  className: 'btn btn-base md:w-1/2',
                                  onClick: function () {
                                    r(), n();
                                  },
                                  children: 'Cancelar',
                                }),
                                (0, i.jsxs)('button', {
                                  type: 'submit',
                                  className: 'btn btn-primary btn-base md:w-1/2 gap-3',
                                  children: [
                                    (0, i.jsx)('i', { className: 'fa-solid fa-cart-shopping text-sm' }),
                                    s ? 'Modificar' : 'Agregar',
                                  ],
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        z = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Membresía' }),
              (0, i.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-primary min-h-[800px]',
                children: [
                  (0, i.jsx)(a, {}),
                  (0, i.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, i.jsx)(s.j3, {}),
                ],
              }),
            ],
          });
        },
        $ = function () {
          return (0, i.jsxs)('div', { children: [(0, i.jsx)(I, {}), (0, i.jsx)(E, {})] });
        },
        G = function () {
          return (0, i.jsxs)('div', {
            children: [
              (0, i.jsx)(q, {}),
              (0, i.jsx)('div', { className: 'my-7', children: (0, i.jsx)(X, {}) }),
              (0, i.jsx)('div', { className: 'my-2', children: (0, i.jsx)(J, {}) }),
            ],
          });
        },
        Q = function () {
          return (0, i.jsx)(s.Z5, {
            children: (0, i.jsxs)(s.AW, {
              element: (0, i.jsx)(z, {}),
              children: [
                (0, i.jsx)(s.AW, { index: !0, element: (0, i.jsx)($, {}) }),
                (0, i.jsx)(s.AW, { path: 'clients', element: (0, i.jsx)(G, {}) }),
                (0, i.jsx)(s.AW, { path: '*', element: (0, i.jsx)(s.Fg, { to: '/admin/membership' }) }),
              ],
            }),
          });
        };
      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var ee = m.Ry({
        seller: m.Z_().required('Seleccione un vendedor'),
        address: m.Z_().trim().required('La dirección es necesaria'),
        doc: m.Z_().trim(),
        phone: m.Z_(),
        name: m
          .Z_()
          .trim()
          .min(2, '2 caracteres mínimos')
          .max(30, '30 caracteres máximo')
          .required('El nombre es requerido'),
        lastName: m
          .Z_()
          .trim()
          .min(2, '2 caracteres mínimos')
          .max(30, '30 caracteres máximo')
          .required('El apellido es requerido'),
        email: m.Z_().trim().email('Formato inválido').required('El correo es requerido'),
        dsto: m.Rx().typeError('Solo se aceptan números').required(!1),
      });
      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var se = function () {
          var e = (function () {
              var e = (0, g.useState)(!1),
                t = (0, j.Z)(e, 2),
                n = t[0],
                s = t[1],
                r = (0, N.I0)(),
                i = {
                  seller: '',
                  address: '',
                  doc: '',
                  phone: '',
                  state: !0,
                  allowAdviser: !1,
                  allowChat: !1,
                  name: '',
                  lastName: '',
                  email: '',
                  dsto: '',
                },
                a = (0, N.v9)(function (e) {
                  return e.admin.seller;
                }).active,
                l = (0, g.useState)(i),
                c = (0, j.Z)(l, 2),
                o = c[0],
                d = c[1];
              return (
                (0, g.useEffect)(
                  function () {
                    a &&
                      (s(!0),
                      d(function (e) {
                        return Y(Y({}, e), a);
                      }));
                  },
                  [a],
                ),
                {
                  openModal: n,
                  setOpenModal: s,
                  active: a,
                  init: o,
                  dispatch: r,
                  setInit: d,
                  initState: i,
                  handleCancelAction: function () {
                    s(!1), d(i), r((0, f.wR)(void 0));
                  },
                  handleSuspenseItem: function (e) {
                    r((0, f.bH)(e));
                  },
                }
              );
            })(),
            t = e.openModal,
            n = e.setOpenModal,
            s = e.active,
            r = e.init,
            a = e.dispatch,
            l = e.setInit,
            c = e.initState,
            m = e.handleCancelAction,
            u = e.handleSuspenseItem,
            x = (0, C.WH)({ area: 'sellers_admin' }).promiseInProgress;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(b, { setOpenModal: n, title: 'Crear nuevo vendedor', active: x }),
              (0, i.jsx)(o.u_, {
                openModal: t,
                children: x
                  ? (0, i.jsx)('div', {
                      className: 'min-h-[60vh] grid place-content-center',
                      children: (0, i.jsx)(o.s_, {}),
                    })
                  : (0, i.jsxs)('div', {
                      className: 'flex flex-col justify-center items-center ',
                      children: [
                        (0, i.jsx)('p', {
                          className: 'text-center text-xl my-5 font-bold',
                          children: s ? ''.concat(s.name) : 'Nuevo vendedor',
                        }),
                        (0, i.jsx)(d.J9, {
                          initialValues: r,
                          onSubmit: function (e) {
                            a(s ? (0, f.jm)(e) : (0, f.mr)(e)), n(!1), l(c);
                          },
                          validationSchema: ee,
                          enableReinitialize: !0,
                          children: function (e) {
                            var t = e.resetForm;
                            return (0, i.jsxs)(d.l0, {
                              children: [
                                (0, i.jsxs)('div', {
                                  className: 'w-full flex flex-col md:flex-row gap-4',
                                  children: [
                                    (0, i.jsxs)('div', {
                                      className: 'md:w-1/2 flex flex-col gap-3',
                                      children: [
                                        (0, i.jsxs)(o.M5, {
                                          name: 'seller',
                                          text: 'Tipo de vendedor',
                                          type: 'seller',
                                          as: 'select',
                                          disabled: s && !s.state,
                                          children: [
                                            (0, i.jsx)('option', {
                                              value: '',
                                              children: 'Seleccione tipo de vendedor',
                                            }),
                                            (0, i.jsx)('option', { value: 'interno', children: 'Interno' }),
                                            (0, i.jsx)('option', { value: 'externo', children: 'Externo' }),
                                          ],
                                        }),
                                        (0, i.jsx)(o.M5, {
                                          name: 'address',
                                          text: 'Domicilio',
                                          type: 'phone',
                                          placeholder: 'dirección',
                                          autoComplete: 'off',
                                          disabled: s && !s.state,
                                        }),
                                        (0, i.jsxs)('div', {
                                          className: 'flex gap-2 justify-between',
                                          children: [
                                            (0, i.jsx)(o.M5, {
                                              name: 'doc',
                                              text: 'Documento',
                                              type: 'phone',
                                              placeholder: 'AV5673',
                                              disabled: s && !s.state,
                                            }),
                                            (0, i.jsx)(o.M5, {
                                              name: 'phone',
                                              text: 'Teléfono',
                                              type: 'phone',
                                              placeholder: '098378920',
                                              disabled: s && !s.state,
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)('div', {
                                          className: 'form-control mt-4',
                                          children: (0, i.jsxs)('label', {
                                            className: 'label cursor-pointer flex justify-start gap-3',
                                            children: [
                                              (0, i.jsx)('span', {
                                                className: 'label-text',
                                                children: 'Permisos de asesor',
                                              }),
                                              (0, i.jsx)(d.gN, {
                                                type: 'checkbox',
                                                className: 'toggle toggle-primary',
                                                name: 'allowAdviser',
                                                disabled: s && !s.state,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, i.jsx)('div', {
                                          className: 'form-control mt-4',
                                          children: (0, i.jsxs)('label', {
                                            className: 'label cursor-pointer flex justify-start gap-3',
                                            children: [
                                              (0, i.jsx)('span', {
                                                className: 'label-text',
                                                children: 'Permisos de chat',
                                              }),
                                              (0, i.jsx)(d.gN, {
                                                type: 'checkbox',
                                                className: 'toggle toggle-primary',
                                                name: 'allowChat',
                                                disabled: s && !s.state,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)('div', {
                                      className: 'flex flex-col gap-3 md:w-1/2',
                                      children: [
                                        (0, i.jsx)(o.M5, {
                                          name: 'name',
                                          text: 'Nombre',
                                          placeholder: 'Ingrese los nombres',
                                          disabled: s && !s.state,
                                        }),
                                        (0, i.jsx)(o.M5, {
                                          name: 'lastName',
                                          text: 'Apellido',
                                          placeholder: 'Ingrese los apellidos',
                                          disabled: s && !s.state,
                                        }),
                                        (0, i.jsx)(o.M5, {
                                          name: 'email',
                                          type: 'email',
                                          text: 'Correo',
                                          placeholder: 'Ingrese correo electrónico',
                                          disabled: s && !s.state,
                                        }),
                                        (0, i.jsx)(o.M5, {
                                          name: 'dsto',
                                          text: '% Comisión',
                                          placeholder: 'Ej: 10%',
                                          disabled: s && !s.state,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)('div', {
                                  className: 'flex flex-col mt-5 justify-between gap-4 md:flex-row md:pr-4 '.concat(
                                    s && 'md:flex-wrap',
                                  ),
                                  children: [
                                    (0, i.jsx)('button', {
                                      type: 'button',
                                      className: 'btn btn-base md:w-1/2 ',
                                      onClick: function () {
                                        m(), t();
                                      },
                                      children: 'Cancelar',
                                    }),
                                    s &&
                                      s.state &&
                                      (0, i.jsxs)('button', {
                                        type: 'button',
                                        className: 'btn btn-base md:flex-1 bg-[#6B6CB0] border-0 gap-3',
                                        onClick: function () {
                                          return u(ne(ne({}, s), {}, { state: !1 }));
                                        },
                                        children: [
                                          (0, i.jsx)('i', { className: 'fa-solid fa-user-lock' }),
                                          'Suspender',
                                        ],
                                      }),
                                    s &&
                                      !s.state &&
                                      (0, i.jsxs)('button', {
                                        type: 'button',
                                        className: 'btn btn-base md:flex-1 bg-sky-600 border-0 gap-3',
                                        onClick: function () {
                                          return u(ne(ne({}, s), {}, { state: !0 }));
                                        },
                                        children: [(0, i.jsx)('i', { className: 'fa-solid fa-user-lock' }), 'Activar'],
                                      }),
                                    s
                                      ? (0, i.jsxs)('button', {
                                          type: 'submit',
                                          className: 'btn btn-primary btn-base md:w-1/2 gap-3',
                                          disabled: s && !s.state,
                                          children: [
                                            (0, i.jsx)('i', { className: 'fa-solid fa-pencil text-sm' }),
                                            'Modificar',
                                          ],
                                        })
                                      : (0, i.jsxs)('button', {
                                          type: 'submit',
                                          className: 'btn btn-primary btn-base md:w-1/2 gap-3',
                                          children: [
                                            (0, i.jsx)('i', { className: 'fa-solid fa-pencil text-sm' }),
                                            'Crear',
                                          ],
                                        }),
                                    s &&
                                      (0, i.jsxs)('button', {
                                        type: 'button',
                                        className: 'btn btn-base md:flex-1 border-0 gap-3 bg-blue-900',
                                        onClick: function () {
                                          m(), t();
                                        },
                                        children: [(0, i.jsx)('i', { className: 'fa-solid fa-xmark' }), 'Cerrar'],
                                      }),
                                  ],
                                }),
                              ],
                            });
                          },
                        }),
                      ],
                    }),
              }),
            ],
          });
        },
        re = function () {
          var e = (0, N.v9)(function (e) {
              return e;
            }).admin.seller.list,
            t = (0, N.I0)();
          (0, g.useEffect)(
            function () {
              t((0, L.m)(1)), t((0, L.c)('sellers'));
            },
            [t, L.m],
          );
          var n = (0, C.WH)({ area: 'sellers_admin' }).promiseInProgress;
          return (0, i.jsxs)('div', {
            className: 'flex flex-col justify-between',
            children: [
              (0, i.jsx)('div', {
                children: n
                  ? (0, i.jsx)('div', {
                      className: 'mt-10 min-h-[60vh] grid place-content-center',
                      children: (0, i.jsx)(o.s_, {}),
                    })
                  : (0, i.jsx)('div', {
                      className: 'mt-10 p-2 flex min-h-[60vh] flex-col gap-5',
                      children:
                        e && e.accounts.length > 0
                          ? null == e
                            ? void 0
                            : e.accounts.map(function (e, n) {
                                return (0, i.jsxs)(
                                  'div',
                                  {
                                    className: 'shadow-xl flex justify-between items-center p-5 rounded-xl cardx',
                                    children: [
                                      (0, i.jsxs)('div', {
                                        className: 'flex gap-4 items-center',
                                        children: [
                                          (0, i.jsx)('span', {
                                            className: 'text-xl py-5 px-7 bg-base-100 rounded-xl',
                                            children: e.seller,
                                          }),
                                          (0, i.jsxs)('div', {
                                            children: [
                                              (0, i.jsx)('p', { children: e.name }),
                                              (0, i.jsx)('p', {
                                                className: 'underline text-sm text-blue-500 cursor-pointer ',
                                                onClick: function () {
                                                  return (function (e) {
                                                    t((0, f.wR)(e));
                                                  })(e);
                                                },
                                                children: 'Ver detalles',
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)('i', { className: 'fa-solid fa-check mr-4 text-xl' }),
                                    ],
                                  },
                                  n,
                                );
                              })
                          : (0, i.jsx)('div', {
                              className: 'flex items-center justify-center h-[500px]',
                              children: (0, i.jsx)('span', { children: 'No existen vendedores' }),
                            }),
                    }),
              }),
              (null == e ? void 0 : e.accounts) &&
                e.accounts.length > 0 &&
                (0, i.jsx)('div', {
                  className: 'mt-10 px-4 self-end '.concat(n && 'hidden'),
                  children: (0, i.jsx)(F, { totalReg: (null == e ? void 0 : e.totalResults) || 0, numPageByReg: 5 }),
                }),
            ],
          });
        },
        ie = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Vendedores' }),
              (0, i.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-primary min-h-[800px]',
                children: [
                  (0, i.jsx)('span', {
                    className:
                      'btn btn-ghost btn-sm px-7 border-2 border-gray-500 p-2 cursor-pointer rounded-2xl subNavActive text-gray-300',
                    children: 'Lista Vendedores',
                  }),
                  (0, i.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, i.jsx)(se, {}),
                  (0, i.jsx)(re, {}),
                ],
              }),
            ],
          });
        },
        ae = function () {
          var e = (0, s.TH)().pathname;
          return (0, i.jsx)('ul', {
            className: 'flex gap-3 my-2',
            children: (0, i.jsx)('li', {
              children: (0, i.jsx)(r.rU, {
                to: '/admin/report',
                className: 'btn btn-ghost btn-sm px-7 border-2 border-gray-500 p-2 rounded-2xl '.concat(
                  e.endsWith('report') && 'subNavActive',
                ),
                children: 'Membresías',
              }),
            }),
          });
        },
        le = n(37327),
        ce = n.n(le),
        oe = n(938),
        de = n(78888);
      function me(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? me(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : me(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var xe = function (e) {
        var t = e.isOpen,
          n = e.sales,
          s = e.setModalSale;
        return (0, i.jsx)(de.u, {
          openModal: t,
          children: (0, i.jsxs)('div', {
            className: 'flex flex-col items-end ',
            children: [
              (0, i.jsxs)('table', {
                className: 'table w-full  min-h-[300px] overflow-auto',
                children: [
                  (0, i.jsx)('thead', {
                    children: (0, i.jsxs)('tr', {
                      children: [(0, i.jsx)('th', { children: 'Detalle' }), (0, i.jsx)('th', { children: 'Precio' })],
                    }),
                  }),
                  (0, i.jsx)('tbody', {
                    children:
                      null == n
                        ? void 0
                        : n.map(function (e) {
                            var t,
                              n = e.id,
                              s = e.detail,
                              r = e.price;
                            return (0,
                            i.jsxs)('tr', { children: [(0, i.jsx)('td', { children: s }), (0, i.jsxs)('td', { children: ['$ ', null === (t = Number(r)) || void 0 === t ? void 0 : t.toFixed(2)] })] }, n);
                          }),
                  }),
                ],
              }),
              (0, i.jsx)('button', {
                onClick: function () {
                  return s(function (e) {
                    return ue(ue({}, e), {}, { isOpen: !1 });
                  });
                },
                className: 'btn btn-sm px-7 text-white p-2 cursor-pointer rounded-lg w-[200px] mt-5',
                children: 'Cerrar',
              }),
            ],
          }),
        });
      };
      function pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pe(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var fe = function () {
          var e = (function () {
              var e = (0, N.I0)(),
                t = (0, N.v9)(function (e) {
                  return e.admin.reports;
                }),
                n = t.membershipList,
                s = t.selectReset,
                r = t.select,
                i = (0, oe.C)(n || []),
                a = i.checkList,
                l = i.handleChangeMain,
                c = i.handleChange,
                o = i.isCheckedAll,
                d = i.resetCheckList,
                m = i.resetCheckAll;
              return (
                (0, g.useEffect)(
                  function () {
                    e((0, f.Ky)((0, W.Z)(a)));
                  },
                  [e, a],
                ),
                (0, g.useEffect)(
                  function () {
                    s && (d(), e((0, f.SS)(!1)));
                  },
                  [s, e],
                ),
                {
                  handleDownload: function () {
                    if (n) {
                      if (!r || r.length <= 0)
                        return A().fire(
                          'Error al realizar la descarga',
                          'Debes seleccionar los datos de la lista',
                          'error',
                        );
                      var t = [
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
                            { label: 'CheckIn', value: 'checkin' },
                            { label: 'CheckOut', value: 'checkout' },
                            { label: 'Precio', value: 'price', format: '$0.00' },
                          ],
                          content: [],
                        },
                      ];
                      r.forEach(function (e) {
                        var n = JSON.parse(e),
                          s = n.name,
                          r = n.lastName,
                          i = n.doc,
                          a = n.id,
                          l = n.email,
                          c = n.sales;
                        t[0].content.push({
                          name: s || '',
                          lastName: r || '',
                          doc: i || '',
                          id: a || '',
                          email: l || '',
                        }),
                          null == c ||
                            c.forEach(function (e) {
                              var n = e.id,
                                s = e.detail,
                                r = e.name,
                                i = e.price,
                                l = e.checkin,
                                c = e.checkout;
                              t[1].content.push({
                                client: a || '',
                                id: n || '',
                                name: r || '',
                                detail: s || '',
                                price: i || '',
                                checkin: l || '',
                                checkout: c || '',
                              });
                            });
                      }),
                        ce()(t, { fileName: 'membershipReport', extraLength: 3, writeOptions: {} }),
                        d(),
                        m(),
                        e((0, f.SS)(!1));
                    }
                  },
                  membershipList: n,
                  isCheckedAll: o,
                  handleChangeMain: l,
                  handleChange: c,
                  checkList: a,
                }
              );
            })(),
            t = e.membershipList,
            n = e.handleDownload,
            s = e.isCheckedAll,
            r = e.handleChangeMain,
            a = e.handleChange,
            l = e.checkList,
            c = (0, g.useState)({ isOpen: !1, sales: [] }),
            o = (0, j.Z)(c, 2),
            d = o[0],
            m = o[1];
          return (0, i.jsx)('div', {
            children: (0, i.jsxs)('div', {
              className: 'flex flex-col gap-5',
              children: [
                (0, i.jsx)('div', {
                  className: 'max-h-[600px] mt-10 overflow-auto scroll_list '.concat('bg-gradient-banner'),
                  children: (0, i.jsx)('div', {
                    className: 'table-container',
                    children:
                      t && (null == t ? void 0 : t.length) > 0
                        ? (0, i.jsxs)('table', {
                            className: 'table text-white',
                            children: [
                              (0, i.jsx)('thead', {
                                children: (0, i.jsxs)('tr', {
                                  children: [
                                    (0, i.jsx)('th', {
                                      children: (0, i.jsx)('input', {
                                        title: 'Check all',
                                        type: 'checkbox',
                                        onChange: r,
                                        checked: s,
                                        className: 'checkbox checkbox-sm checkbox-primary',
                                      }),
                                    }),
                                    (0, i.jsx)('th', { children: 'Nombre' }),
                                    (0, i.jsx)('th', { children: 'Apellido' }),
                                    (0, i.jsx)('th', { children: 'Documento' }),
                                    (0, i.jsx)('th', { children: 'Correo' }),
                                    (0, i.jsx)('th', { children: 'Ventas' }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)('tbody', {
                                children:
                                  null == t
                                    ? void 0
                                    : t.map(function (e, t) {
                                        var n = e.name,
                                          s = e.lastName,
                                          r = e.doc,
                                          c = e.email,
                                          o = e.sales;
                                        return (0, i.jsxs)(
                                          'tr',
                                          {
                                            children: [
                                              (0, i.jsx)('td', {
                                                children: (0, i.jsx)('input', {
                                                  title: 'Seleccionar',
                                                  type: 'checkbox',
                                                  className: 'checkbox checkbox-sm checkbox-primary',
                                                  onChange: a,
                                                  value: JSON.stringify(he(he({}, e), {}, { index: t })),
                                                  checked: l.has(JSON.stringify(he(he({}, e), {}, { index: t }))),
                                                }),
                                              }),
                                              (0, i.jsx)('td', { children: n }),
                                              (0, i.jsx)('td', { children: s }),
                                              (0, i.jsx)('td', { children: r }),
                                              (0, i.jsx)('td', { children: c }),
                                              (0, i.jsx)('td', {
                                                className: '',
                                                children:
                                                  o && o.length > 0
                                                    ? (0, i.jsx)('i', {
                                                        className: 'fa-solid fa-tag  cursor-pointer',
                                                        onClick: function () {
                                                          return (function (e) {
                                                            return m({ isOpen: !0, sales: e || [] });
                                                          })(o);
                                                        },
                                                      })
                                                    : (0, i.jsx)('span', { className: 'text-xs', children: 'S/N' }),
                                              }),
                                            ],
                                          },
                                          t,
                                        );
                                      }),
                              }),
                            ],
                          })
                        : (0, i.jsx)('div', {
                            className: 'h-full grid place-content-center min-h-[50vh]',
                            children: (0, i.jsx)('h1', { className: 'text-white', children: 'No hay resultados' }),
                          }),
                  }),
                }),
                (0, i.jsxs)('div', {
                  className: 'flex flex-col md:flex-row gap-10 items-center justify-end',
                  children: [
                    (0, i.jsxs)('button', {
                      type: 'button',
                      onClick: n,
                      className: 'btn',
                      children: [
                        (0, i.jsx)('i', { className: 'fa-solid fa-file-export mr-4' }),
                        (0, i.jsx)('small', { children: 'Exportar base de datos excel' }),
                      ],
                    }),
                    (0, i.jsx)(xe, { isOpen: d.isOpen, sales: d.sales, setModalSale: m }),
                  ],
                }),
              ],
            }),
          });
        },
        be = function (e) {
          var t = e.type,
            n = (0, N.v9)(function (e) {
              return e.admin.membership;
            }).list,
            s = (0, N.I0)(),
            r = !1;
          return (0, i.jsx)('div', {
            children: (0, i.jsx)(d.J9, {
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
              onSubmit: function (e, n) {
                var r = n.resetForm;
                'membership' === t ? delete e.numMembership : delete e.name, r(), s((0, f.hr)(e));
              },
              children: function (e) {
                var t = e.values;
                return (0, i.jsx)(d.l0, {
                  className: 'w-full flex flex-col md:flex-row md:flex-wrap gap-4 items-center',
                  noValidate: !0,
                  children: (0, i.jsxs)('div', {
                    className: 'w-full flex flex-col md:flex-row gap-4',
                    children: [
                      (0, i.jsxs)(o.M5, {
                        name: 'filter',
                        text: 'Filtrar por:',
                        as: 'select',
                        className: 'select-sm',
                        disabled: r,
                        children: [
                          (0, i.jsx)('option', { value: '', children: 'Seleccione filtro' }),
                          (0, i.jsx)('option', { value: '1', children: 'alfabético' }),
                          (0, i.jsx)('option', { value: '2', children: 'Fecha' }),
                          (0, i.jsx)('option', { value: '3', children: 'Membresía' }),
                          (0, i.jsx)('option', { value: '4', children: 'Documento' }),
                          (0, i.jsx)('option', { value: '5', children: 'Nombre' }),
                          (0, i.jsx)('option', { value: '6', children: 'Correo' }),
                        ],
                      }),
                      '1' === t.filter &&
                        (0, i.jsxs)(o.M5, {
                          name: 'typeSort',
                          as: 'select',
                          text: 'Ordenar por:',
                          className: 'select-sm',
                          disabled: r,
                          children: [
                            (0, i.jsx)('option', { value: '', disabled: !0, children: 'Seleccione uno' }),
                            (0, i.jsx)('option', { value: 'ASC', children: 'Ascendente' }),
                            (0, i.jsx)('option', { value: 'DESC', children: 'Descendente' }),
                          ],
                        }),
                      '2' === t.filter &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(o.M5, {
                              name: 'startDate',
                              type: 'date',
                              text: 'Fecha inicio',
                              placeholder: 'Fecha Inicio',
                              className: 'input-sm',
                              disabled: r,
                            }),
                            (0, i.jsx)(o.M5, {
                              name: 'endDate',
                              type: 'date',
                              text: 'Fecha Fin',
                              placeholder: 'Fecha Fin',
                              className: 'input-sm',
                              disabled: r,
                            }),
                          ],
                        }),
                      '3' === t.filter &&
                        (0, i.jsxs)(o.M5, {
                          name: 'membership',
                          as: 'select',
                          text: 'Membresía',
                          className: 'select-sm',
                          disabled: r,
                          children: [
                            (0, i.jsx)('option', { value: '', disabled: !0, children: 'Seleccione una opción' }),
                            n &&
                              n.length > 0 &&
                              n.map(function (e, t) {
                                return 'S/N' !== e.name && (0, i.jsx)('option', { value: e.id, children: e.name }, t);
                              }),
                          ],
                        }),
                      '5' === t.filter &&
                        (0, i.jsx)(o.M5, {
                          name: 'name',
                          text: 'Nombres',
                          placeholder: 'Ingrese los nombres',
                          className: 'input-sm',
                          disabled: r,
                        }),
                      '4' === t.filter &&
                        (0, i.jsx)(o.M5, {
                          name: 'doc',
                          text: 'Documento',
                          placeholder: 'Ingrese documento',
                          className: 'input-sm',
                          disabled: r,
                        }),
                      '6' === t.filter &&
                        (0, i.jsx)(o.M5, {
                          name: 'email',
                          text: 'Correo',
                          placeholder: 'Ingrese correo',
                          className: 'input-sm',
                          disabled: r,
                        }),
                      (0, i.jsxs)('button', {
                        type: 'submit',
                        disabled: r,
                        className: 'btn btn-sm bg-blue-900 gap-3 w-full md:w-[150px] mt-7 text-white ',
                        children: [
                          (0, i.jsx)('i', { className: 'fa-solid fa-magnifying-glass text-lg ' }),
                          (0, i.jsx)('span', { className: 'font-bold', children: 'Buscar' }),
                        ],
                      }),
                      (0, i.jsxs)('button', {
                        type: 'button',
                        disabled: r,
                        onClick: function () {
                          s((0, f.g2)());
                        },
                        className: 'btn btn-sm bg-blue-900 gap-3 w-full md:w-[150px] mt-7 text-white ',
                        children: [
                          (0, i.jsx)('i', { className: 'fa-solid fa-rotate text-lg ' }),
                          (0, i.jsx)('span', { className: 'font-bold', children: 'Recargar' }),
                        ],
                      }),
                    ],
                  }),
                });
              },
            }),
          });
        },
        je = function () {
          var e = (function () {
              var e = (0, N.I0)(),
                t = (0, N.v9)(function (e) {
                  return e.admin.reports;
                }),
                n = t.salesList,
                s = t.selectResetSales,
                r = t.selectSales,
                i = (0, oe.C)(n || []),
                a = i.checkList,
                l = i.handleChangeMain,
                c = i.handleChange,
                o = i.isCheckedAll,
                d = i.resetCheckList,
                m = i.resetCheckAll;
              return (
                (0, g.useEffect)(
                  function () {
                    e((0, f.ei)((0, W.Z)(a)));
                  },
                  [e, a],
                ),
                (0, g.useEffect)(
                  function () {
                    s && (d(), e((0, f.vW)(!1)));
                  },
                  [s, e],
                ),
                {
                  handleDownload: function () {
                    if (n) {
                      if (!r || r.length <= 0)
                        return A().fire(
                          'Error al realizar la descarga',
                          'Debes seleccionar los datos de la lista',
                          'error',
                        );
                      var t = [
                        {
                          sheet: 'ventas',
                          columns: [
                            { label: 'ID Cliente', value: 'id' },
                            { label: 'Nombre', value: 'name' },
                            { label: 'Apellido', value: 'lastName' },
                            { label: 'Documento', value: 'doc' },
                            { label: 'Correo', value: 'email' },
                            { label: 'Num Membresía', value: 'numMembership' },
                          ],
                          content: [],
                        },
                      ];
                      r.forEach(function (e) {
                        var n = JSON.parse(e),
                          s = n.name,
                          r = n.lastName,
                          i = n.doc,
                          a = n.id,
                          l = n.email,
                          c = n.numMembership;
                        t[0].content.push({ name: s, lastName: r, doc: i, id: a, email: l, numMembership: c });
                      }),
                        ce()(t, { fileName: 'salesReport', extraLength: 3, writeOptions: {} }),
                        d(),
                        m(),
                        e((0, f.vW)(!1));
                    }
                  },
                  salesList: n,
                  isCheckedAll: o,
                  handleChangeMain: l,
                  handleChange: c,
                  checkList: a,
                }
              );
            })(),
            t = e.salesList,
            n = e.handleDownload,
            s = e.isCheckedAll,
            r = e.handleChangeMain,
            a = e.handleChange,
            l = e.checkList;
          return (0, i.jsx)('div', {
            children: (0, i.jsxs)('div', {
              className: 'flex flex-col gap-5',
              children: [
                (0, i.jsx)('div', {
                  className: 'max-h-[600px] mt-10 overflow-auto scroll_list '.concat('bg-gradient-banner'),
                  children: (0, i.jsx)('div', {
                    className: 'table-container',
                    children: (0, i.jsxs)('table', {
                      className: 'table text-white',
                      children: [
                        (0, i.jsx)('thead', {
                          children: (0, i.jsxs)('tr', {
                            children: [
                              (0, i.jsx)('th', {
                                children: (0, i.jsx)('input', {
                                  title: 'Check all',
                                  type: 'checkbox',
                                  onChange: r,
                                  checked: s,
                                  className: 'checkbox checkbox-sm checkbox-primary',
                                }),
                              }),
                              (0, i.jsx)('th', { children: 'Nombres' }),
                              (0, i.jsx)('th', { children: 'Apellido' }),
                              (0, i.jsx)('th', { children: 'Documento' }),
                              (0, i.jsx)('th', { children: 'Correo' }),
                              (0, i.jsx)('th', { children: 'N. Membresía' }),
                            ],
                          }),
                        }),
                        (0, i.jsx)('tbody', {
                          children:
                            null == t
                              ? void 0
                              : t.map(function (e, t) {
                                  var n = e.name,
                                    s = e.lastName,
                                    r = e.doc,
                                    c = e.email,
                                    o = e.numMembership;
                                  return (0,
                                  i.jsxs)('tr', { children: [(0, i.jsx)('td', { children: (0, i.jsx)('input', { title: 'Seleccionar', type: 'checkbox', className: 'checkbox checkbox-sm checkbox-primary', onChange: a, value: JSON.stringify(e), checked: l.has(JSON.stringify(e)) }) }), (0, i.jsx)('td', { children: n }), (0, i.jsx)('td', { children: s }), (0, i.jsx)('td', { children: r }), (0, i.jsx)('td', { children: c }), (0, i.jsx)('td', { children: o })] }, t);
                                }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsxs)('div', {
                  className: 'flex flex-col md:flex-row gap-10 items-center justify-end',
                  children: [
                    (0, i.jsxs)('button', {
                      type: 'button',
                      onClick: n,
                      className: 'btn',
                      children: [
                        (0, i.jsx)('i', { className: 'fa-solid fa-file-export mr-4' }),
                        (0, i.jsx)('small', { children: 'Exportar base de datos excel' }),
                      ],
                    }),
                    (0, i.jsx)(F, { totalReg: 92 }),
                  ],
                }),
              ],
            }),
          });
        },
        ve = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Reportes' }),
              (0, i.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-primary min-h-[800px]',
                children: [
                  (0, i.jsx)(ae, {}),
                  (0, i.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, i.jsx)(s.j3, {}),
                ],
              }),
            ],
          });
        },
        ge = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(be, { type: 'membership' }),
              (0, i.jsx)('div', { className: 'mt-5', children: (0, i.jsx)(fe, {}) }),
            ],
          });
        },
        Ne = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(be, { type: 'sales' }),
              (0, i.jsx)('div', { className: 'mt-5', children: (0, i.jsx)(je, {}) }),
            ],
          });
        },
        ye = function () {
          return (0, i.jsx)(s.Z5, {
            children: (0, i.jsxs)(s.AW, {
              element: (0, i.jsx)(ve, {}),
              children: [
                (0, i.jsx)(s.AW, { index: !0, element: (0, i.jsx)(ge, {}) }),
                (0, i.jsx)(s.AW, { path: 'sales', element: (0, i.jsx)(Ne, {}) }),
                (0, i.jsx)(s.AW, { path: '*', element: (0, i.jsx)(s.Fg, { to: '/admin/report' }) }),
              ],
            }),
          });
        },
        we = n(26736),
        Oe = function () {
          var e = (0, N.v9)(function (e) {
              return e.admin.promo;
            }).list,
            t = (0, N.I0)(),
            n = (0, C.WH)({ area: 'promo_admin' }).promiseInProgress;
          return (0, i.jsx)('div', {
            className: 'h-[750px] overflow-y-auto scroll_none',
            children: n
              ? (0, i.jsx)('div', { className: 'h-full grid place-content-center', children: (0, i.jsx)(o.s_, {}) })
              : (0, i.jsx)('div', {
                  className: 'flex flex-col gap-7 mx-5 ',
                  children:
                    null == e
                      ? void 0
                      : e.map(function (e, n) {
                          var s = e.img,
                            r = e.title,
                            a = e.description;
                          return (0, i.jsxs)(
                            'div',
                            {
                              className: 'card shadow-xl image-full w-full h-[350px] ',
                              children: [
                                (0, i.jsx)('figure', {
                                  children: (0, i.jsx)('img', {
                                    src: s ? ''.concat('http://ism.urgiz.com:4000', '/').concat(s) : we,
                                    alt: 'banner',
                                    className: 'w-full h-full object-fill block',
                                  }),
                                }),
                                (0, i.jsxs)('div', {
                                  className: 'card-body',
                                  children: [
                                    (0, i.jsx)('h2', { className: 'card-title text-white text-3xl', children: r }),
                                    (0, i.jsx)('div', {
                                      className: 'card-actions justify-end ',
                                      children: (0, i.jsxs)('div', {
                                        className: ' w-full md:w-2/5 flex flex-col gap-4',
                                        children: [
                                          (0, i.jsxs)('div', {
                                            className:
                                              'h-[200px] md:bg-base-100 rounded-xl shadow-xl md:text-black p-5 overflow-y-auto',
                                            children: [
                                              (0, i.jsx)('span', {
                                                className: 'text-lg text-bold',
                                                children: 'Detalle información',
                                              }),
                                              (0, i.jsx)('div', { className: 'mt-3 md:text-gray-500', children: a }),
                                            ],
                                          }),
                                          (0, i.jsx)('span', {
                                            className: 'text-xl text-white text-center underline cursor-pointer',
                                            onClick: function () {
                                              return (function (e) {
                                                t((0, f.C4)(e));
                                              })(e);
                                            },
                                            children: 'Ver detalle',
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            n,
                          );
                        }),
                }),
          });
        },
        Ce = n(44925),
        ke = n(84623),
        Pe = n(31286),
        Se = function () {
          var e = (0, N.I0)(),
            t = (0, N.v9)(function (e) {
              return e;
            }).admin.promo.modal;
          return (0, i.jsx)(o.u_, {
            openModal: null == t ? void 0 : t.open,
            children: (0, i.jsxs)('div', {
              className: 'relative',
              children: [
                (0, i.jsx)('div', {
                  className: 'absolute w-full',
                  children: (0, i.jsx)('button', {
                    title: 'hotel',
                    type: 'button',
                    className: 'btn btn-sm btn-circle absolute top-0 right-0',
                    onClick: function () {
                      return e((0, f.q3)(!1, 'cancel'));
                    },
                    children: (0, i.jsx)('i', { className: 'fa-solid fa-xmark' }),
                  }),
                }),
                (0, i.jsx)('span', {
                  className: 'block text-center text-xl mt-4 mb-8 font-bold',
                  children: 'Buscar Hotel',
                }),
                (0, i.jsx)('div', { className: 'mt-3', children: (0, i.jsx)(Pe.f, { isPromo: !0 }) }),
                (0, i.jsx)('div', {
                  className: 'mt-8 bg-[#ececcc] rounded-xl p-3',
                  children: (0, i.jsx)(ke.D, { isClientModule: !1, isPromo: !0 }),
                }),
              ],
            }),
          });
        },
        Ie = m.Ry({
          title: m.Z_().required('Seleccione un titulo'),
          from: m.hT().typeError('Fecha invalida').required('campo requerido'),
          until: m
            .hT()
            .typeError('Fecha invalida')
            .when('from', {
              is: function (e) {
                return e;
              },
              then: m.hT().test('test date', 'La fecha de inicio debe ser menor a la fecha de expiración', function () {
                var e = !0,
                  t = this.parent,
                  n = t.from,
                  s = t.until;
                return n && s && (e = (0, p.Z)(n).isBefore(s)), e;
              }),
            })
            .required('campo requerido'),
          description: m.Z_().required('Ingresa una descripción'),
          policies: m.Z_().required('Ingresa una política'),
          membership: m.Z_().required('Selecciona una opción'),
          informationApi: m.IX().when('dynamic', {
            is: !0,
            then: m
              .IX(
                m.Ry({
                  id: m.Z_().required('Seleccione una opción'),
                  services: m
                    .IX(
                      m.Ry({
                        id: m.Z_().required('Seleccione una opción'),
                        data: m
                          .IX(
                            m.Ry({
                              id: m.Z_(),
                              name: m.Z_().trim(),
                              dsto: m
                                .Rx()
                                .typeError('Unicamente números')
                                .test('profit', 'Supera el limite de ganancia', function (e) {
                                  var t = !0,
                                    n = this.from[1].value.id;
                                  n && e && (t = JSON.parse(n).profit >= e);
                                  return t;
                                }),
                            }),
                          )
                          .default(null)
                          .nullable()
                          .test('test without service', 'Agregue al menos un servicio', function () {
                            var e;
                            return (null === (e = this.parent.data) || void 0 === e ? void 0 : e.length) > 0;
                          })
                          .test('test repeat service', 'Servicio repetido', function (e) {
                            var t = !0;
                            if (e) {
                              var n =
                                  null == e
                                    ? void 0
                                    : e.map(function (e) {
                                        return e.id;
                                      }),
                                s =
                                  null == e
                                    ? void 0
                                    : e.filter(function (e, t) {
                                        var s = e.id;
                                        return !(null != n && n.includes(s, t + 1));
                                      });
                              t = (null == e ? void 0 : e.length) === (null == s ? void 0 : s.length);
                            }
                            return t;
                          }),
                      }),
                    )
                    .test('test without service', 'agregue al menos un servicio', function () {
                      var e;
                      return (null === (e = this.parent.services) || void 0 === e ? void 0 : e.length) > 0;
                    }),
                }),
              )
              .test('test without motor', 'agregue al menos un motor', function () {
                var e;
                return (null === (e = this.parent.informationApi) || void 0 === e ? void 0 : e.length) > 0;
              }),
          }),
        });
      function Me(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Me(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Me(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var De = ['from', 'until', 'dynamic'];
      function Ae(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      var Ze = function (e) {
          var t = (function (e) {
              var t = (0, j.Z)(e, 2),
                n = t[0],
                s = t[1],
                r = (0, g.useRef)(null),
                i = (0, g.useRef)(null),
                a = (0, v.X)({ refImg: i, inputImgRef: r }),
                l = a.handleChangeImg,
                c = a.handleOpenInputImg,
                o = (0, N.I0)(),
                d = {
                  img: null,
                  title: '',
                  from: '',
                  until: '',
                  description: '',
                  policies: '',
                  membership: '',
                  dynamic: !1,
                },
                m = (0, N.v9)(function (e) {
                  return e;
                }),
                u = m.admin,
                x = u.promo.active,
                p = u.membership.list,
                h = m.provider.list,
                b = (0, g.useState)(d),
                y = (0, j.Z)(b, 2),
                w = y[0],
                O = y[1];
              return (
                (0, g.useEffect)(
                  function () {
                    x &&
                      (s(!0),
                      O(function (e) {
                        return Ee(Ee({}, e), x);
                      }));
                  },
                  [x],
                ),
                {
                  openModal: n,
                  setOpenModal: s,
                  active: x,
                  init: w,
                  dispatch: o,
                  setInit: O,
                  initState: d,
                  handleOpenInputImg: c,
                  refImg: i,
                  handleCancelAction: function () {
                    s(!1), O(d), o((0, f.C4)(void 0));
                  },
                  handleDeleteItem: function (e) {
                    s(!1), O(d), o((0, f.aV)(e));
                  },
                  inputImgRef: r,
                  handleChangeImg: l,
                  listProviders: h,
                  listMemberships: p,
                }
              );
            })(e.modal),
            n = t.openModal,
            s = t.init,
            r = t.handleCancelAction,
            a = t.handleDeleteItem,
            c = t.active,
            m = t.refImg,
            u = t.inputImgRef,
            x = t.handleChangeImg,
            h = t.handleOpenInputImg,
            b = t.setOpenModal,
            y = t.dispatch,
            w = t.setInit,
            O = t.initState,
            C = t.listMemberships;
          return (0, i.jsxs)(o.u_, {
            openModal: n,
            children: [
              (0, i.jsxs)('div', {
                className: 'flex flex-col justify-center items-center ',
                children: [
                  (0, i.jsx)('p', {
                    className: 'text-center text-xl my-5 pb-5',
                    children: c ? 'Detalle promoción existente' : 'Nueva promocion',
                  }),
                  (0, i.jsx)(d.J9, {
                    initialValues: s,
                    onSubmit: function (e) {
                      var t = e.from,
                        n = e.until,
                        s = e.dynamic,
                        r = (0, Ce.Z)(e, De),
                        i = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? Ae(Object(n), !0).forEach(function (t) {
                                  (0, l.Z)(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                              : Ae(Object(n)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                });
                          }
                          return e;
                        })({ from: (0, p.Z)(t).unix(), until: (0, p.Z)(n).unix(), dynamic: s }, r);
                      s || delete i.informationApi, y(c ? (0, f.z8)(e) : (0, f._V)(e)), b(!1), w(O);
                    },
                    validationSchema: Ie,
                    enableReinitialize: !0,
                    children: function (e) {
                      var t = e.setFieldValue,
                        n = e.values;
                      return (0, i.jsxs)(d.l0, {
                        className: 'flex flex-col w-full',
                        children: [
                          (0, i.jsxs)('div', {
                            className: 'flex flex-col md:flex-row gap-6',
                            children: [
                              (0, i.jsxs)('div', {
                                className: 'flex flex-col md:w-1/2',
                                children: [
                                  (0, i.jsxs)('label', {
                                    className: 'my-3',
                                    children: [
                                      (0, i.jsx)('span', { children: 'Arte' }),
                                      (0, i.jsx)('div', {
                                        onClick: h,
                                        className:
                                          'w-[120px] h-[75px] rounded-lg border border-primary flex justify-center items-center cursor-pointer',
                                        children: (0, i.jsx)('img', {
                                          ref: m,
                                          src: n.img ? ''.concat('http://ism.urgiz.com:4000', '/').concat(n.img) : we,
                                          alt: '',
                                          className: 'w-full h-full rounded-lg object-cover block',
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(o.M5, {
                                    name: 'title',
                                    text: 'Titulo',
                                    placeholder: 'Ingrese el titulo',
                                    className: 'input-sm',
                                    tabIndex: -1,
                                  }),
                                  (0, i.jsxs)('div', {
                                    className: 'flex gap-3',
                                    children: [
                                      (0, i.jsx)(o.M5, {
                                        name: 'from',
                                        text: 'Desde',
                                        type: 'Date',
                                        className: 'input-sm',
                                        tabIndex: -1,
                                        min: (0, p.Z)(new Date()).format('yyyy-MM-DD'),
                                      }),
                                      (0, i.jsx)(o.M5, {
                                        name: 'until',
                                        text: 'Hasta',
                                        type: 'Date',
                                        className: 'input-sm',
                                        tabIndex: -1,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('div', {
                                className: 'flex flex-col md:w-1/2',
                                children: [
                                  (0, i.jsx)(o.M5, {
                                    name: 'description',
                                    text: 'Descripcion',
                                    as: 'textarea',
                                    placeholder: 'Descripcion',
                                    className: 'textarea textarea-primary h-[120px]',
                                  }),
                                  (0, i.jsx)(o.M5, {
                                    name: 'policies',
                                    text: 'Terminos y condiciones',
                                    as: 'textarea',
                                    placeholder: 'Condiciones',
                                    className: 'textarea textarea-primary h-[120px]',
                                  }),
                                  (0, i.jsxs)(o.M5, {
                                    name: 'membership',
                                    text: 'Válido para',
                                    as: 'select',
                                    className: 'input-sm',
                                    children: [
                                      (0, i.jsx)('option', { value: '', children: 'Seleccione uno' }),
                                      (0, i.jsx)('option', { value: 'all', children: 'Todos los usuarios' }),
                                      null == C
                                        ? void 0
                                        : C.map(function (e, t) {
                                            var n;
                                            return (0,
                                            i.jsx)('option', { value: e.id, children: 's/n' === (null === (n = e.name) || void 0 === n ? void 0 : n.toLocaleLowerCase()) ? 'Sin membresías' : e.name }, t);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)('div', {
                            className: 'flex flex-col mt-5 justify-between gap-4 md:flex-row md:pr-4 '.concat(
                              c && 'md:flex-wrap',
                            ),
                            children: [
                              (0, i.jsx)('button', {
                                type: 'button',
                                className: 'btn btn-base md:w-1/2',
                                onClick: r,
                                tabIndex: -1,
                                children: 'Cancelar',
                              }),
                              c &&
                                (0, i.jsxs)('button', {
                                  type: 'button',
                                  className: 'btn btn-base md:flex-1 bg-red-500 border-0 gap-3',
                                  onClick: function () {
                                    return a(c);
                                  },
                                  tabIndex: -1,
                                  children: [(0, i.jsx)('i', { className: 'fa-solid fa-trash text-sm' }), 'Eliminar'],
                                }),
                              c
                                ? (0, i.jsxs)('button', {
                                    type: 'submit',
                                    className: 'btn btn-primary btn-base md:w-1/2 gap-3',
                                    tabIndex: -1,
                                    children: [
                                      (0, i.jsx)('i', { className: 'fa-solid fa-pencil text-sm' }),
                                      'Modificar',
                                    ],
                                  })
                                : (0, i.jsxs)('button', {
                                    type: 'submit',
                                    className: 'btn btn-primary btn-base md:w-1/2 gap-3',
                                    tabIndex: -1,
                                    children: [(0, i.jsx)('i', { className: 'fa-solid fa-pencil text-sm' }), 'Crear'],
                                  }),
                            ],
                          }),
                          (0, i.jsx)('input', {
                            title: 'Seleccionar imagen',
                            id: 'file',
                            name: 'img',
                            type: 'file',
                            ref: u,
                            onChange: function (e) {
                              return x(e, t);
                            },
                            className: 'hidden',
                          }),
                        ],
                      });
                    },
                  }),
                ],
              }),
              (0, i.jsx)(Se, {}),
            ],
          });
        },
        _e = function () {
          var e = (0, g.useState)(!1);
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Promociones' }),
              (0, i.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-primary min-h-[800px]',
                children: [
                  (0, i.jsxs)('div', {
                    className: 'flex gap-5',
                    children: [
                      (0, i.jsx)('span', {
                        className:
                          'btn btn-ghost btn-sm border-2 border-gray-500 p-2 px-4 cursor-pointer rounded-2xl subNavActive',
                        children: 'Existentes',
                      }),
                      (0, i.jsx)('span', {
                        className: 'btn btn-ghost btn-sm border-2 border-gray-500 p-2 px-7 cursor-pointer rounded-2xl',
                        onClick: function () {
                          return e[1](!0);
                        },
                        children: 'Crear',
                      }),
                    ],
                  }),
                  (0, i.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, i.jsx)(Oe, {}),
                  (0, i.jsx)(Ze, { modal: e }),
                ],
              }),
            ],
          });
        },
        Re = ['Hoteles', 'Vuelos', 'Tours', 'Autos', 'Crucero', 'Seguro', 'Traslados'],
        Le = function (e) {
          var t = e.values;
          return (0, i.jsx)(d.F2, {
            name: 'services',
            render: function (e) {
              return (0, i.jsxs)('div', {
                children: [
                  (0, i.jsx)('button', {
                    type: 'button',
                    className: 'btn btn-primary btn-sm my-6 px-5',
                    onClick: function () {
                      return e.push({ id: '1', name: '', state: !0, profit: '' });
                    },
                    children: 'Agregar nuevo servicio',
                  }),
                  (0, i.jsx)('div', {
                    className: 'flex flex-wrap gap-4 mt-5',
                    children:
                      t.services &&
                      t.services.length > 0 &&
                      t.services.map(function (n, s) {
                        return (0, i.jsxs)(
                          'div',
                          {
                            className: 'w-full md:w-[48%] rounded-lg p-5 shadow-xl bg-base-100',
                            children: [
                              (0, i.jsxs)('div', {
                                className: 'flex gap-4 items-center',
                                children: [
                                  (0, i.jsx)('div', {
                                    className: 'form-control mt-4',
                                    children: (0, i.jsxs)('label', {
                                      className: 'label cursor-pointer flex justify-start gap-3',
                                      children: [
                                        (0, i.jsx)('span', { className: 'label-text', children: 'Habilitar' }),
                                        (0, i.jsx)(d.gN, {
                                          type: 'checkbox',
                                          className: 'toggle toggle-primary',
                                          name: 'services['.concat(s, '].state'),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, i.jsx)(o.M5, {
                                    name: 'services['.concat(s, '].profit'),
                                    text: '% Ganancia',
                                    placeholder: '% max. ganancia.',
                                    className: 'input-sm',
                                    labelClassName: 'text-xs',
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('div', {
                                className: 'flex gap-4 items-center',
                                children: [
                                  (0, i.jsxs)(o.M5, {
                                    name: 'services['.concat(s, '].name'),
                                    as: 'select',
                                    className: 'select-sm',
                                    children: [
                                      (0, i.jsx)('option', {
                                        value: '',
                                        disabled: !0,
                                        children: 'Seleccionar servicio',
                                      }),
                                      Re.map(function (e, t) {
                                        return (0, i.jsx)('option', { value: e, children: e }, t);
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)('div', {
                                    className: 'tooltip',
                                    'data-tip': 'Eliminar servicio',
                                    children: (0, i.jsx)('i', {
                                      className: 'fa-solid fa-circle-xmark cursor-pointer  text-primary text-xl',
                                      onClick: function () {
                                        return t.services.length > 1 && e.remove(s);
                                      },
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
                ],
              });
            },
          });
        },
        qe = m.Ry({
          name: m
            .Z_()
            .trim()
            .min(2, '2 caracteres mínimo')
            .max(20, '20 caracteres máximo')
            .required('El campo es necesario'),
          contact: m.Z_().trim().min(2, '2 caracteres mínimo').max(20, '20 caracteres máximo'),
          country: m.Z_().trim().min(2, '2 caracteres mínimo').max(15, '15 caracteres máximo'),
          phone: m.Z_().trim().min(6, '6 caracteres mínimo').max(20, '20 caracteres máximo'),
          webPage: m.Z_().trim().min(2, '2 caracteres mínimo').max(35, '35 caracteres máximo'),
          credentials: m.Ry({
            username: m
              .Z_()
              .trim()
              .min(2, '2 caracteres mínimo')
              .max(30, '30 caracteres máximo')
              .required('El campo es necesario'),
            password: m
              .Z_()
              .trim()
              .min(2, '2 caracteres mínimo')
              .max(150, '150 caracteres máximo')
              .required('El campo es necesario'),
            confirmPassword: m
              .Z_()
              .trim()
              .oneOf([m.iH('password'), null], 'Contraseñas no coinciden')
              .required('El campo es necesario'),
          }),
          services: m
            .IX(m.Ry({ name: m.Z_().trim() }))
            .test('Unique service', 'Existen servicios repetidos', function (e) {
              var t =
                  null == e
                    ? void 0
                    : e.map(function (e) {
                        return e.name;
                      }),
                n =
                  null == e
                    ? void 0
                    : e.filter(function (e, n) {
                        var s = e.name;
                        return !(null != t && t.includes(s, n + 1));
                      });
              return (null == e ? void 0 : e.length) === (null == n ? void 0 : n.length);
            }),
        }),
        Fe = n(81354);
      function We(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function He(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? We(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : We(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Ve = function () {
          var e = (0, g.useState)(!1),
            t = (0, j.Z)(e, 2),
            n = t[0],
            s = t[1],
            r = (0, N.I0)(),
            a = (0, N.v9)(function (e) {
              return e.provider;
            }).active,
            l = {
              name: '',
              contact: '',
              country: '',
              state: !0,
              phone: '',
              webPage: '',
              credentials: { username: '', password: '', endPoint: '', confirmPassword: '' },
              services: [{ name: 'Hoteles', state: !0, profit: '' }],
            },
            c = (0, g.useState)(l),
            m = (0, j.Z)(c, 2),
            u = m[0],
            x = m[1];
          (0, g.useEffect)(
            function () {
              if (a && a.active && 'edit' === a.action) {
                var e = Fe.AES.decrypt(a.active.credentials.password, '12323523'),
                  t = Fe.AES.decrypt(a.active.credentials.username, '12323523'),
                  n = e.toString(Fe.enc.Utf8),
                  r = t.toString(Fe.enc.Utf8);
                x(
                  He(
                    He({}, a.active),
                    {},
                    {
                      credentials: He(
                        He({}, a.active.credentials),
                        {},
                        { username: r, password: n, confirmPassword: n },
                      ),
                    },
                  ),
                ),
                  s(!0);
              } else x(l);
            },
            [r, a],
          );
          var p = (0, C.WH)({ area: 'providerList' }).promiseInProgress;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(b, { setOpenModal: s, title: 'Configurar nuevo proveedor', active: p }),
              (0, i.jsx)(o.u_, {
                openModal: n,
                children: (0, i.jsxs)('div', {
                  className: 'flex flex-col justify-center items-center',
                  children: [
                    (0, i.jsx)('p', {
                      className: 'text-center text-xl my-5',
                      children: null != a && a.active ? a.active.name : 'Configurar nuevo proveedor',
                    }),
                    (0, i.jsx)(d.J9, {
                      initialValues: u,
                      onSubmit: function (e, t) {
                        var n = t.resetForm;
                        r(a ? (0, f.Qy)(e) : (0, f.zR)(e)), s(!1), x(l), n();
                      },
                      validationSchema: qe,
                      enableReinitialize: !0,
                      children: function (e) {
                        var t = e.values,
                          n = e.resetForm,
                          l = e.errors;
                        return (0, i.jsxs)(d.l0, {
                          className: 'w-full mt-8',
                          children: [
                            (0, i.jsxs)('div', {
                              className: 'flex flex-col md:flex-row gap-4 ',
                              children: [
                                (0, i.jsxs)('div', {
                                  className: 'flex flex-col w-full md:w-1/2 gap-4',
                                  children: [
                                    (0, i.jsx)(o.M5, {
                                      name: 'name',
                                      text: 'Nombre',
                                      placeholder: 'Nombre del proveedor',
                                    }),
                                    (0, i.jsx)(o.M5, {
                                      name: 'contact',
                                      text: 'Contacto',
                                      placeholder: 'Nombre del contacto',
                                    }),
                                    (0, i.jsx)(o.M5, { name: 'country', text: 'País', placeholder: 'País' }),
                                  ],
                                }),
                                (0, i.jsxs)('div', {
                                  className: 'flex flex-col w-full md:w-1/2 gap-4',
                                  children: [
                                    (0, i.jsx)(o.M5, {
                                      name: 'webPage',
                                      text: 'Sitio Web',
                                      placeholder: 'https://example.com',
                                    }),
                                    (0, i.jsx)(o.M5, {
                                      name: 'phone',
                                      text: 'Teléfono',
                                      placeholder: '+593 97 979 2049',
                                    }),
                                    (0, i.jsx)('div', {
                                      className: 'form-control mt-4',
                                      children: (0, i.jsxs)('label', {
                                        className: 'label cursor-pointer flex justify-start gap-3',
                                        children: [
                                          (0, i.jsx)('span', { className: 'label-text', children: 'Habilitar' }),
                                          (0, i.jsx)(d.gN, {
                                            type: 'checkbox',
                                            className: 'toggle toggle-primary',
                                            name: 'state',
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)('hr', { className: 'my-5' }),
                            (0, i.jsxs)('div', {
                              children: [
                                (0, i.jsx)('small', { className: 'text-gray-500', children: 'Credenciales' }),
                                (0, i.jsxs)('div', {
                                  className: 'flex flex-col md:flex-row gap-4 mt-5',
                                  children: [
                                    (0, i.jsxs)('div', {
                                      className: 'flex flex-col w-full md:w-1/2 gap-4',
                                      children: [
                                        (0, i.jsx)(o.M5, {
                                          name: 'credentials.username',
                                          text: 'Usuario',
                                          placeholder: 'Usuario or Correo',
                                        }),
                                        (0, i.jsx)(o.M5, {
                                          name: 'credentials.endPoint',
                                          text: 'Url de conexión',
                                          placeholder: 'EndPoint',
                                          type: 'endPoint',
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)('div', {
                                      className: 'flex flex-col w-full md:w-1/2 gap-4',
                                      children: [
                                        (0, i.jsx)(o.M5, {
                                          name: 'credentials.password',
                                          text: 'Contraseña',
                                          type: 'password',
                                          placeholder: 'contraseña',
                                        }),
                                        (0, i.jsx)(o.M5, {
                                          name: 'credentials.confirmPassword',
                                          text: 'Confirmar contraseña',
                                          placeholder: 'Confirmar contraseña',
                                          type: 'password',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)('hr', { className: 'my-5' }),
                            (0, i.jsxs)('div', {
                              children: [
                                (0, i.jsx)('small', { className: 'text-gray-500 block', children: 'Servicios' }),
                                l.services &&
                                  (0, i.jsxs)('span', {
                                    className: 'text-red-500 text-sm mt-5 block',
                                    children: ['* ', l.services],
                                  }),
                                (0, i.jsx)(Le, { values: t }),
                              ],
                            }),
                            (0, i.jsxs)('div', {
                              className: 'flex gap-4 w-full mt-10',
                              children: [
                                (0, i.jsx)('button', {
                                  type: 'button',
                                  className: 'btn w-[48%]',
                                  onClick: function () {
                                    s(!1), n(), a && r((0, f.tt)(void 0));
                                  },
                                  children: 'Cancelar',
                                }),
                                (0, i.jsx)('button', {
                                  type: 'submit',
                                  className: 'btn btn-primary w-[48%]',
                                  children: null != a && a.active ? 'Modificar' : 'Registrar',
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Je = function (e) {
          var t,
            n = e.openModal,
            s = e.setOpenModal,
            r = (0, N.v9)(function (e) {
              return e.provider;
            }).active,
            a = (0, N.I0)();
          return (0, i.jsx)('div', {
            children:
              (null == r ? void 0 : r.active) &&
              (null === (t = r.active) || void 0 === t ? void 0 : t.services.length) >= 1 &&
              (0, i.jsxs)(o.u_, {
                openModal: n,
                children: [
                  (0, i.jsxs)('table', {
                    className: 'table border w-full',
                    children: [
                      (0, i.jsx)('thead', {
                        children: (0, i.jsxs)('tr', {
                          children: [
                            (0, i.jsx)('td', { children: 'Servicio' }),
                            (0, i.jsx)('td', { children: 'Estado' }),
                            (0, i.jsx)('td', { children: 'Ganancia' }),
                          ],
                        }),
                      }),
                      (0, i.jsx)('tbody', {
                        children: r.active.services.map(function (e, t) {
                          var n = e.name,
                            s = e.state,
                            r = e.profit;
                          return (0,
                          i.jsxs)('tr', { children: [(0, i.jsx)('td', { children: n }), (0, i.jsx)('td', { children: s ? 'Habilitado' : 'Deshabilitado' }), (0, i.jsx)('td', { children: ''.concat(r, ' %') || 0 })] }, t);
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)('div', {
                    className: 'flex justify-end mt-8',
                    children: (0, i.jsx)('button', {
                      type: 'button',
                      className: 'btn',
                      onClick: function () {
                        s(!1), a((0, f.tt)(void 0));
                      },
                      children: 'Cerrar',
                    }),
                  }),
                ],
              }),
          });
        },
        Ue = function () {
          var e = (0, N.v9)(function (e) {
              return e.provider;
            }).list,
            t = (0, N.I0)(),
            n = (0, g.useState)(!1),
            s = (0, j.Z)(n, 2),
            r = s[0],
            a = s[1];
          if (!e) return (0, i.jsx)('div', {});
          var l = (0, C.WH)({ area: 'providerList' }).promiseInProgress;
          return (0, i.jsx)('div', {
            children: l
              ? (0, i.jsx)('div', {
                  className: 'min-h-[60vh] grid place-content-center',
                  children: (0, i.jsx)(o.s_, {}),
                })
              : (0, i.jsxs)('div', {
                  className: 'max-h-[600px] mt-10 overflow-auto scroll_list '.concat(!l && 'bg-gradient-banner'),
                  children: [
                    (0, i.jsx)('div', {
                      children:
                        e.length > 0
                          ? (0, i.jsx)('div', {
                              className: 'table-container',
                              children: (0, i.jsxs)('table', {
                                className: 'table text-white ',
                                children: [
                                  (0, i.jsx)('thead', {
                                    children: (0, i.jsxs)('tr', {
                                      children: [
                                        (0, i.jsx)('th', { children: 'Nombre' }),
                                        (0, i.jsx)('th', { children: 'Nombre de contacto' }),
                                        (0, i.jsx)('th', { children: 'Teléfono' }),
                                        (0, i.jsx)('th', { children: 'País' }),
                                        (0, i.jsx)('th', { children: 'Estado' }),
                                        (0, i.jsx)('th', { className: 'text-center', children: 'Opciones' }),
                                      ],
                                    }),
                                  }),
                                  (0, i.jsx)('tbody', {
                                    children: e.map(function (e, n) {
                                      return (0, i.jsxs)(
                                        'tr',
                                        {
                                          children: [
                                            (0, i.jsx)('td', { children: e.name }),
                                            (0, i.jsx)('td', { children: e.contact || 'N/A' }),
                                            (0, i.jsx)('td', { children: e.phone || 'N/A' }),
                                            (0, i.jsx)('td', { children: e.country || 'N/A' }),
                                            (0, i.jsx)('td', { children: e.state ? 'Habilitado' : 'Inhabilitado' }),
                                            (0, i.jsxs)('td', {
                                              className: 'text-center',
                                              children: [
                                                (0, i.jsx)('div', {
                                                  className: 'tooltip',
                                                  'data-tip': 'editar',
                                                  children: (0, i.jsx)('button', {
                                                    title: 'edit',
                                                    type: 'button',
                                                    className: 'btn btn-xs btn-ghost btn-circle',
                                                    children: (0, i.jsx)('i', {
                                                      className: 'fa-solid fa-pen-to-square',
                                                      onClick: function () {
                                                        return (function (e) {
                                                          t((0, f.tt)({ active: e, action: 'edit' }));
                                                        })(e);
                                                      },
                                                    }),
                                                  }),
                                                }),
                                                (0, i.jsx)('div', {
                                                  className: 'tooltip',
                                                  'data-tip': 'servicios activos',
                                                  children: (0, i.jsx)('button', {
                                                    title: 'show',
                                                    type: 'button',
                                                    className: 'btn btn-xs btn-ghost btn-circle',
                                                    children: (0, i.jsx)('i', {
                                                      className: 'fa-solid fa-gear',
                                                      onClick: function () {
                                                        return (function (e) {
                                                          e.services.length <= 0
                                                            ? A().fire(
                                                                'Servicios no activos',
                                                                'No existen servicios configurados',
                                                                'info',
                                                              )
                                                            : (t((0, f.tt)({ active: e, action: 'showServices' })),
                                                              a(!0));
                                                        })(e);
                                                      },
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        n,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            })
                          : (0, i.jsx)('div', {
                              className: 'min-h-[60vh] grid place-content-center',
                              children: (0, i.jsxs)('span', {
                                className: 'block text-lg text-center text-white',
                                children: [' ', 'No existen proveedores registrados'],
                              }),
                            }),
                    }),
                    (0, i.jsx)(Je, { openModal: r, setOpenModal: a }),
                  ],
                }),
          });
        },
        Te = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Proveedores' }),
              (0, i.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-primary min-h-[800px]',
                children: [
                  (0, i.jsx)('span', {
                    className:
                      'btn btn-ghost btn-sm px-7 border-2 border-gray-500 p-2 cursor-pointer rounded-2xl subNavActive',
                    children: 'Lista Proveedores',
                  }),
                  (0, i.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, i.jsx)(Ve, {}),
                  (0, i.jsx)(Ue, {}),
                ],
              }),
            ],
          });
        },
        Be = m.Ry({
          host: m
            .Z_()
            .trim()
            .min(3, 'nombre demasiado corto!')
            .max(30, 'nombre demasiado largo!')
            .required('Host is requerido'),
          port: m.Rx().typeError('El puerto debe ser un número').required('Puerto is requerido'),
          auth: m.Ry({
            user: m.Z_().email('El email no es válido').required('Email is requerido'),
            pass: m.Z_().required('Contraseña is requerida'),
          }),
        }),
        Xe = n(15861),
        ze = n(87757),
        $e = n.n(ze),
        Ge = n(75820),
        Qe = n(69659);
      function Ke(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function Ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ke(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ke(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var et = function (e) {
          return { type: Qe.y, payload: { email: e } };
        },
        tt = function () {
          var e = (0, N.I0)(),
            t = (0, N.v9)(function (e) {
              return e.admin.config;
            }).email,
            n = (0, g.useState)({ host: '', port: '', secure: !1, auth: { user: '', pass: '' } }),
            s = (0, j.Z)(n, 2),
            r = s[0],
            a = s[1];
          (0, g.useEffect)(
            function () {
              t && a(t);
            },
            [t],
          );
          return (0, i.jsx)('div', {
            className: '',
            children: (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)('h1', { className: 'font-bold', children: 'Correo electrónico' }),
                (0, i.jsx)(d.J9, {
                  initialValues: r,
                  enableReinitialize: !0,
                  onSubmit: function (t) {
                    e(
                      (function (e) {
                        return (function () {
                          var t = (0, Xe.Z)(
                            $e().mark(function t(n) {
                              return $e().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        (0, Ge.X2)({ url: '/config', method: 'POST', data: e }).catch(function () {
                                          return A().fire(
                                            'Proceso fallido',
                                            'No se pudo guardar la configuración',
                                            'error',
                                          );
                                        })
                                      );
                                    case 2:
                                      if (200 !== t.sent.status) {
                                        t.next = 7;
                                        break;
                                      }
                                      return (
                                        n(et(Ye(Ye({}, e), {}, { auth: Ye(Ye({}, e.auth), {}, { pass: '' }) }))),
                                        t.abrupt(
                                          'return',
                                          A().fire(
                                            'Proceso exitoso',
                                            'La configuración se ha guardado correctamente',
                                            'success',
                                          ),
                                        )
                                      );
                                    case 7:
                                    case 'end':
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })();
                      })(t),
                    );
                  },
                  validationSchema: Be,
                  children: function () {
                    return (0, i.jsx)(d.l0, {
                      children: (0, i.jsxs)('div', {
                        className: 'mt-4 w-full flex flex-col md:flex-row gap-4 justify-between',
                        children: [
                          (0, i.jsxs)('div', {
                            className: 'flex gap-4',
                            children: [
                              (0, i.jsx)(o.M5, {
                                name: 'host',
                                className: 'input-sm w-full',
                                placeholder: 'smtp-example.com',
                                text: 'Host',
                              }),
                              (0, i.jsx)(o.M5, {
                                name: 'port',
                                className: 'input-sm w-full',
                                placeholder: '587',
                                text: 'Puerto',
                              }),
                            ],
                          }),
                          (0, i.jsxs)('div', {
                            className: 'flex gap-4',
                            children: [
                              (0, i.jsx)(o.M5, {
                                name: 'auth.user',
                                className: 'input-sm w-full',
                                placeholder: 'example@host.com',
                                text: 'Correo',
                              }),
                              (0, i.jsx)(o.M5, {
                                name: 'auth.pass',
                                type: 'password',
                                className: 'input-sm w-full',
                                placeholder: '********',
                                text: 'Contraseña',
                              }),
                            ],
                          }),
                          (0, i.jsxs)('div', {
                            className: 'flex gap-4 items-center justify-between',
                            children: [
                              (0, i.jsx)('div', {
                                className: 'form-control',
                                children: (0, i.jsxs)('label', {
                                  className: 'label cursor-pointer flex items-center justify-start gap-3',
                                  children: [
                                    (0, i.jsx)('span', {
                                      className: 'label-text whitespace-nowrap',
                                      children: 'Puerto seguro?',
                                    }),
                                    (0, i.jsx)(d.gN, {
                                      type: 'checkbox',
                                      className: 'toggle toggle-primary',
                                      name: 'secure',
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)('button', {
                                type: 'submit',
                                className: 'btn btn-sm md:w-[200px]',
                                children: 'Guardar',
                              }),
                            ],
                          }),
                        ],
                      }),
                    });
                  },
                }),
              ],
            }),
          });
        },
        nt = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)('h1', { className: 'font-bold text-2xl text-white', children: 'Configuración' }),
              (0, i.jsxs)('div', {
                className: 'mt-2 rounded-xl p-5 bg-primary min-h-[800px]',
                children: [
                  (0, i.jsx)('span', {
                    className:
                      'btn btn-ghost btn-sm px-7 border-2 border-gray-500 p-2 cursor-pointer rounded-2xl subNavActive',
                    children: 'Configuración',
                  }),
                  (0, i.jsx)('hr', { className: 'my-6 border-1 border-slate-200' }),
                  (0, i.jsx)(tt, {}),
                ],
              }),
            ],
          });
        },
        st = n(87681),
        rt = function () {
          return (0, i.jsx)('nav', {
            className: 'flex flex-col navAside',
            children: (0, i.jsxs)('ul', {
              children: [
                (0, i.jsx)('li', {
                  children: (0, i.jsx)(r.OL, {
                    to: '/admin/membership',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, i.jsx)('span', { children: 'Membresías' }),
                  }),
                }),
                (0, i.jsx)('li', {
                  children: (0, i.jsx)(r.OL, {
                    to: '/admin/seller',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, i.jsx)('span', { children: 'Vendedores' }),
                  }),
                }),
                (0, i.jsx)('li', {
                  children: (0, i.jsx)(r.OL, {
                    to: '/admin/report',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, i.jsx)('span', { children: 'Reportes' }),
                  }),
                }),
                (0, i.jsx)('li', {
                  children: (0, i.jsx)(r.OL, {
                    to: '/admin/promo',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, i.jsx)('span', { children: 'Promociones' }),
                  }),
                }),
                (0, i.jsx)('li', {
                  children: (0, i.jsx)(r.OL, {
                    to: '/admin/providers',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, i.jsx)('span', { children: 'Proveedores' }),
                  }),
                }),
                (0, i.jsx)('li', {
                  children: (0, i.jsx)(r.OL, {
                    to: '/admin/config',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, i.jsx)('span', { children: 'Configuración' }),
                  }),
                }),
                (0, i.jsx)('li', {
                  children: (0, i.jsx)(r.OL, {
                    to: '/admin/chat',
                    className: function (e) {
                      return e.isActive ? 'navActive' : '';
                    },
                    children: (0, i.jsx)('span', { children: 'Chat' }),
                  }),
                }),
              ],
            }),
          });
        },
        it = n(25976),
        at = n(11594),
        lt = n(96599),
        ct = function () {
          var e = (0, N.v9)(function (e) {
            return e.user;
          }).img;
          return (0, i.jsxs)('div', {
            className: 'navbar bg-base-100 p-5 xl:px-32',
            children: [
              (0, i.jsxs)('div', {
                className: 'flex-1',
                children: [
                  (0, i.jsx)(r.rU, {
                    to: '/',
                    className: ' normal-case text-xl landing__logo ml-5',
                    children: (0, i.jsx)('img', { src: it, alt: 'logo' }),
                  }),
                  (0, i.jsx)('span', {
                    className: 'self-end hidden xl:block text font-bold',
                    children: 'Panel administrativo ISM',
                  }),
                ],
              }),
              (0, i.jsx)('div', {
                className: 'flex-none',
                children: (0, i.jsx)('div', {
                  className: 'dropdown dropdown-end flex ',
                  children: (0, i.jsx)(at.q, {
                    img: e,
                    children: (0, i.jsxs)('ul', {
                      tabIndex: 0,
                      className: 'menu menu-compact dropdown-content mt-12 p-2 shadow bg-base-100 rounded-box w-52',
                      children: [
                        (0, i.jsx)('li', { children: (0, i.jsx)(r.rU, { to: '/admin/profile', children: 'Perfil' }) }),
                        (0, i.jsxs)('div', {
                          className: 'xl:hidden',
                          children: [
                            (0, i.jsx)('li', {
                              children: (0, i.jsx)(r.rU, { to: '/admin/membership', children: 'Membresías' }),
                            }),
                            (0, i.jsx)('li', {
                              children: (0, i.jsx)(r.rU, { to: '/admin/seller', children: 'Vendedores' }),
                            }),
                            (0, i.jsx)('li', {
                              children: (0, i.jsx)(r.rU, { to: '/admin/report', children: 'Reportes' }),
                            }),
                            (0, i.jsx)('li', {
                              children: (0, i.jsx)(r.rU, { to: '/admin/promo', children: 'Promociones' }),
                            }),
                            (0, i.jsx)('li', {
                              children: (0, i.jsx)(r.rU, { to: '/admin/providers', children: 'Proveedores' }),
                            }),
                            (0, i.jsx)('li', {
                              children: (0, i.jsx)(r.rU, { to: '/admin/config', children: 'Configuración' }),
                            }),
                            (0, i.jsx)('li', { children: (0, i.jsx)(r.rU, { to: '/admin/chat', children: 'Chat' }) }),
                          ],
                        }),
                        (0, i.jsx)('li', {
                          children: (0, i.jsx)(lt.R, { children: (0, i.jsx)('span', { children: 'Cerrar sesión' }) }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        ot = function () {
          return (0, i.jsxs)('div', {
            className: 'animate__animated animate__fadeIn',
            children: [
              (0, i.jsx)(ct, {}),
              (0, i.jsxs)('div', {
                className: 'xl:px-32 flex items-start body-screen pt-10 bg-gradient-body',
                children: [
                  (0, i.jsx)('div', {
                    className: 'hidden xl:block xl:min-w-[250px] rounded-xl p-5 bg-base-200 bg-gradient-banner',
                    children: (0, i.jsx)(rt, {}),
                  }),
                  (0, i.jsx)('div', {
                    className: 'w-full mx-4 xl:w-3/4 mb-10 md:mx-10',
                    children: (0, i.jsx)(s.j3, {}),
                  }),
                ],
              }),
              (0, i.jsx)(o.$_, {}),
            ],
          });
        },
        dt = n(507),
        mt = function () {
          var e = (0, C.WH)({ area: 'logout' }).promiseInProgress,
            t = (0, N.I0)(),
            n = (0, N.v9)(function (e) {
              return e;
            }),
            r = n.admin,
            a = r.seller.list,
            l = r.membership.list,
            c = n.utils,
            d = c.page,
            m = c.typePag;
          return (
            (0, g.useEffect)(
              function () {
                t((0, f.Rt)());
              },
              [t],
            ),
            (0, g.useEffect)(
              function () {
                (null == a || !a.accounts || a.accounts.length <= 0) && t((0, f.xi)(1));
              },
              [t, a],
            ),
            (0, g.useEffect)(
              function () {
                t((0, f.hd)(1));
              },
              [t],
            ),
            (0, g.useEffect)(
              function () {
                m && 'sellers' === m && t((0, f.xi)(d || 1));
              },
              [d, t, m],
            ),
            (0, g.useEffect)(
              function () {
                m && 'clients' === m && t((0, f.hd)(d || 1));
              },
              [d, t, m],
            ),
            (0, g.useEffect)(
              function () {
                t((0, dt.A)());
              },
              [t],
            ),
            (0, g.useEffect)(
              function () {
                t((0, f.kI)());
              },
              [t],
            ),
            (0, g.useEffect)(
              function () {
                l || t((0, f.lX)());
              },
              [l],
            ),
            (0, g.useEffect)(
              function () {
                t((0, f.IZ)());
              },
              [t],
            ),
            (0, g.useEffect)(
              function () {
                t((0, f.g2)());
              },
              [t],
            ),
            (0, g.useEffect)(function () {
              t(
                (function () {
                  var e = (0, Xe.Z)(
                    $e().mark(function e(t) {
                      var n, s, r;
                      return $e().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                (0, Ge.X2)({ url: '/config', method: 'get' }).catch(function () {
                                  return A().fire('Proceso fallido', 'No se pudo cargar la configuración', 'error');
                                })
                              );
                            case 2:
                              (n = e.sent), (s = n.status), (r = n.data), 200 === s && r && t(et(r));
                            case 6:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            }, []),
            (0, i.jsx)('div', {
              children: e
                ? (0, i.jsx)(o.yI, {})
                : (0, i.jsxs)(s.Z5, {
                    children: [
                      (0, i.jsxs)(s.AW, {
                        element: (0, i.jsx)(ot, {}),
                        children: [
                          (0, i.jsx)(s.AW, { path: 'profile', element: (0, i.jsx)(o.BQ, {}) }),
                          (0, i.jsx)(s.AW, { path: 'membership/*', element: (0, i.jsx)(Q, {}) }),
                          (0, i.jsx)(s.AW, { path: 'seller', element: (0, i.jsx)(ie, {}) }),
                          (0, i.jsx)(s.AW, { path: 'promo', element: (0, i.jsx)(_e, {}) }),
                          (0, i.jsx)(s.AW, { path: 'report/*', element: (0, i.jsx)(ye, {}) }),
                          (0, i.jsx)(s.AW, { path: 'providers', element: (0, i.jsx)(Te, {}) }),
                          (0, i.jsx)(s.AW, { path: 'config', element: (0, i.jsx)(nt, {}) }),
                          (0, i.jsx)(s.AW, { path: 'chat/*', element: (0, i.jsx)(st.W, {}) }),
                        ],
                      }),
                      (0, i.jsx)(s.AW, { path: '*', element: (0, i.jsx)(i.Fragment, { children: 'Estas perdido' }) }),
                    ],
                  }),
            })
          );
        };
      const ut = mt;
    },
    938: (e, t, n) => {
      'use strict';
      n.d(t, { C: () => a });
      var s = n(42982),
        r = n(70885),
        i = n(67294),
        a = function (e) {
          var t = (0, i.useState)(new Set()),
            n = (0, r.Z)(t, 2),
            a = n[0],
            l = n[1],
            c = (0, i.useState)(!1),
            o = (0, r.Z)(c, 2),
            d = o[0],
            m = o[1];
          return {
            handleChange: function (t) {
              var n = t.target,
                r = n.checked,
                i = n.value;
              e && e.length - 1 === a.size ? m(!0) : m(!1),
                l(
                  !0 === r
                    ? function (e) {
                        return new Set([].concat((0, s.Z)(e), [i]));
                      }
                    : function (e) {
                        return new Set(
                          (0, s.Z)(e).filter(function (e) {
                            return e !== i;
                          }),
                        );
                      },
                );
            },
            handleChangeMain: function (t) {
              var n = t.target.checked;
              if (
                (m(function (e) {
                  return !e;
                }),
                n && e)
              ) {
                var r = e.map(function (e) {
                  return JSON.stringify(e);
                });
                l(function (e) {
                  return new Set([].concat((0, s.Z)(e), (0, s.Z)(r)));
                });
              } else l(new Set());
            },
            isCheckedAll: d,
            checkList: a,
            resetCheckList: function () {
              return l(new Set());
            },
            resetCheckAll: function () {
              return m(!1);
            },
          };
        };
    },
    42480: () => {},
    75220: () => {},
  },
]);
