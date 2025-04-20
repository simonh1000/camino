class I {
  static read_bytes(t, e) {
    const n = new I();
    return n.buf = t.getUint32(e, !0), n.buf_len = t.getUint32(e + 4, !0), n;
  }
  static read_bytes_array(t, e, n) {
    const a = [];
    for (let r = 0; r < n; r++)
      a.push(I.read_bytes(t, e + 8 * r));
    return a;
  }
}
class A {
  static read_bytes(t, e) {
    const n = new A();
    return n.buf = t.getUint32(e, !0), n.buf_len = t.getUint32(e + 4, !0), n;
  }
  static read_bytes_array(t, e, n) {
    const a = [];
    for (let r = 0; r < n; r++)
      a.push(A.read_bytes(t, e + 8 * r));
    return a;
  }
}
const j = 0, z = 1, y = 2, ut = 0, Rt = 1, v = 2, w = 3, b = 4, Et = 5, Nt = 6, Ot = 7;
class ot {
  head_length() {
    return 24;
  }
  name_length() {
    return this.dir_name.byteLength;
  }
  write_head_bytes(t, e) {
    t.setBigUint64(e, this.d_next, !0), t.setBigUint64(e + 8, this.d_ino, !0), t.setUint32(e + 16, this.dir_name.length, !0), t.setUint8(e + 20, this.d_type);
  }
  write_name_bytes(t, e, n) {
    t.set(this.dir_name.slice(0, Math.min(this.dir_name.byteLength, n)), e);
  }
  constructor(t, e, n) {
    this.d_ino = 1n;
    const a = new TextEncoder().encode(e);
    this.d_next = t, this.d_namlen = a.byteLength, this.d_type = n, this.dir_name = a;
  }
}
const St = 0, gt = 1, Tt = 2, mt = 3, pt = 4, wt = 5, J = 1, It = 2, At = 4, bt = 8, Pt = 16;
class L {
  write_bytes(t, e) {
    t.setUint8(e, this.fs_filetype), t.setUint16(e + 2, this.fs_flags, !0), t.setBigUint64(e + 8, this.fs_rights_base, !0), t.setBigUint64(e + 16, this.fs_rights_inherited, !0);
  }
  constructor(t, e) {
    this.fs_rights_base = 0n, this.fs_rights_inherited = 0n, this.fs_filetype = t, this.fs_flags = e;
  }
}
const Dt = 1, Ut = 2, yt = 4, Lt = 8, x = 1, p = 2, W = 4, Y = 8;
class P {
  write_bytes(t, e) {
    t.setBigUint64(e, this.dev, !0), t.setBigUint64(e + 8, this.ino, !0), t.setUint8(e + 16, this.filetype), t.setBigUint64(e + 24, this.nlink, !0), t.setBigUint64(e + 32, this.size, !0), t.setBigUint64(e + 38, this.atim, !0), t.setBigUint64(e + 46, this.mtim, !0), t.setBigUint64(e + 52, this.ctim, !0);
  }
  constructor(t, e) {
    this.dev = 0n, this.ino = 0n, this.nlink = 0n, this.atim = 0n, this.mtim = 0n, this.ctim = 0n, this.filetype = t, this.size = e;
  }
}
const Ct = 0, Ft = 1, xt = 2, Gt = 1, Bt = 1, Ht = 0, Mt = 1, kt = 2, Vt = 3, vt = 4, Wt = 5, Yt = 6, Kt = 7, $t = 8, jt = 9, zt = 10, Jt = 11, Xt = 12, qt = 13, Qt = 14, Zt = 15, te = 16, ee = 17, re = 18, se = 19, ne = 20, ie = 21, ae = 22, oe = 23, le = 24, ce = 25, _e = 26, fe = 27, de = 28, he = 29, ue = 30, Re = 1, Ee = 2, Ne = 1, Oe = 1, Se = 2, lt = 0;
class ct {
  write_bytes(t, e) {
    t.setUint32(e, this.pr_name_len, !0);
  }
  constructor(t) {
    this.pr_name_len = t;
  }
}
class B {
  static dir(t) {
    const e = new B();
    return e.tag = lt, e.inner = new ct(t), e;
  }
  write_bytes(t, e) {
    t.setUint32(e, this.tag, !0), this.inner.write_bytes(t, e + 4);
  }
}
const ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ADVICE_DONTNEED: pt,
  ADVICE_NOREUSE: wt,
  ADVICE_NORMAL: St,
  ADVICE_RANDOM: Tt,
  ADVICE_SEQUENTIAL: gt,
  ADVICE_WILLNEED: mt,
  CLOCKID_MONOTONIC: 1,
  CLOCKID_PROCESS_CPUTIME_ID: 2,
  CLOCKID_REALTIME: 0,
  CLOCKID_THREAD_CPUTIME_ID: 3,
  Ciovec: A,
  Dirent: ot,
  ERRNO_2BIG: 1,
  ERRNO_ACCES: 2,
  ERRNO_ADDRINUSE: 3,
  ERRNO_ADDRNOTAVAIL: 4,
  ERRNO_AFNOSUPPORT: 5,
  ERRNO_AGAIN: 6,
  ERRNO_ALREADY: 7,
  ERRNO_BADF: 8,
  ERRNO_BADMSG: 9,
  ERRNO_BUSY: 10,
  ERRNO_CANCELED: 11,
  ERRNO_CHILD: 12,
  ERRNO_CONNABORTED: 13,
  ERRNO_CONNREFUSED: 14,
  ERRNO_CONNRESET: 15,
  ERRNO_DEADLK: 16,
  ERRNO_DESTADDRREQ: 17,
  ERRNO_DOM: 18,
  ERRNO_DQUOT: 19,
  ERRNO_EXIST: 20,
  ERRNO_FAULT: 21,
  ERRNO_FBIG: 22,
  ERRNO_HOSTUNREACH: 23,
  ERRNO_IDRM: 24,
  ERRNO_ILSEQ: 25,
  ERRNO_INPROGRESS: 26,
  ERRNO_INTR: 27,
  ERRNO_INVAL: 28,
  ERRNO_IO: 29,
  ERRNO_ISCONN: 30,
  ERRNO_ISDIR: 31,
  ERRNO_LOOP: 32,
  ERRNO_MFILE: 33,
  ERRNO_MLINK: 34,
  ERRNO_MSGSIZE: 35,
  ERRNO_MULTIHOP: 36,
  ERRNO_NAMETOOLONG: 37,
  ERRNO_NETDOWN: 38,
  ERRNO_NETRESET: 39,
  ERRNO_NETUNREACH: 40,
  ERRNO_NFILE: 41,
  ERRNO_NOBUFS: 42,
  ERRNO_NODEV: 43,
  ERRNO_NOENT: 44,
  ERRNO_NOEXEC: 45,
  ERRNO_NOLCK: 46,
  ERRNO_NOLINK: 47,
  ERRNO_NOMEM: 48,
  ERRNO_NOMSG: 49,
  ERRNO_NOPROTOOPT: 50,
  ERRNO_NOSPC: 51,
  ERRNO_NOSYS: 52,
  ERRNO_NOTCAPABLE: 76,
  ERRNO_NOTCONN: 53,
  ERRNO_NOTDIR: 54,
  ERRNO_NOTEMPTY: 55,
  ERRNO_NOTRECOVERABLE: 56,
  ERRNO_NOTSOCK: 57,
  ERRNO_NOTSUP: 58,
  ERRNO_NOTTY: 59,
  ERRNO_NXIO: 60,
  ERRNO_OVERFLOW: 61,
  ERRNO_OWNERDEAD: 62,
  ERRNO_PERM: 63,
  ERRNO_PIPE: 64,
  ERRNO_PROTO: 65,
  ERRNO_PROTONOSUPPORT: 66,
  ERRNO_PROTOTYPE: 67,
  ERRNO_RANGE: 68,
  ERRNO_ROFS: 69,
  ERRNO_SPIPE: 70,
  ERRNO_SRCH: 71,
  ERRNO_STALE: 72,
  ERRNO_SUCCESS: 0,
  ERRNO_TIMEDOUT: 73,
  ERRNO_TXTBSY: 74,
  ERRNO_XDEV: 75,
  EVENTRWFLAGS_FD_READWRITE_HANGUP: Gt,
  EVENTTYPE_CLOCK: Ct,
  EVENTTYPE_FD_READ: Ft,
  EVENTTYPE_FD_WRITE: xt,
  FDFLAGS_APPEND: J,
  FDFLAGS_DSYNC: It,
  FDFLAGS_NONBLOCK: At,
  FDFLAGS_RSYNC: bt,
  FDFLAGS_SYNC: Pt,
  FD_STDERR: 2,
  FD_STDIN: 0,
  FD_STDOUT: 1,
  FILETYPE_BLOCK_DEVICE: Rt,
  FILETYPE_CHARACTER_DEVICE: v,
  FILETYPE_DIRECTORY: w,
  FILETYPE_REGULAR_FILE: b,
  FILETYPE_SOCKET_DGRAM: Et,
  FILETYPE_SOCKET_STREAM: Nt,
  FILETYPE_SYMBOLIC_LINK: Ot,
  FILETYPE_UNKNOWN: ut,
  FSTFLAGS_ATIM: Dt,
  FSTFLAGS_ATIM_NOW: Ut,
  FSTFLAGS_MTIM: yt,
  FSTFLAGS_MTIM_NOW: Lt,
  Fdstat: L,
  Filestat: P,
  Iovec: I,
  OFLAGS_CREAT: x,
  OFLAGS_DIRECTORY: p,
  OFLAGS_EXCL: W,
  OFLAGS_TRUNC: Y,
  PREOPENTYPE_DIR: lt,
  Prestat: B,
  PrestatDir: ct,
  RIFLAGS_RECV_PEEK: Re,
  RIFLAGS_RECV_WAITALL: Ee,
  RIGHTS_FD_ADVISE: 128,
  RIGHTS_FD_ALLOCATE: 256,
  RIGHTS_FD_DATASYNC: 1,
  RIGHTS_FD_FDSTAT_SET_FLAGS: 8,
  RIGHTS_FD_FILESTAT_GET: 2097152,
  RIGHTS_FD_FILESTAT_SET_SIZE: 4194304,
  RIGHTS_FD_FILESTAT_SET_TIMES: 8388608,
  RIGHTS_FD_READ: 2,
  RIGHTS_FD_READDIR: 16384,
  RIGHTS_FD_SEEK: 4,
  RIGHTS_FD_SYNC: 16,
  RIGHTS_FD_TELL: 32,
  RIGHTS_FD_WRITE: 64,
  RIGHTS_PATH_CREATE_DIRECTORY: 512,
  RIGHTS_PATH_CREATE_FILE: 1024,
  RIGHTS_PATH_FILESTAT_GET: 262144,
  RIGHTS_PATH_FILESTAT_SET_SIZE: 524288,
  RIGHTS_PATH_FILESTAT_SET_TIMES: 1048576,
  RIGHTS_PATH_LINK_SOURCE: 2048,
  RIGHTS_PATH_LINK_TARGET: 4096,
  RIGHTS_PATH_OPEN: 8192,
  RIGHTS_PATH_READLINK: 32768,
  RIGHTS_PATH_REMOVE_DIRECTORY: 33554432,
  RIGHTS_PATH_RENAME_SOURCE: 65536,
  RIGHTS_PATH_RENAME_TARGET: 131072,
  RIGHTS_PATH_SYMLINK: 16777216,
  RIGHTS_PATH_UNLINK_FILE: 67108864,
  RIGHTS_POLL_FD_READWRITE: 134217728,
  RIGHTS_SOCK_SHUTDOWN: 268435456,
  ROFLAGS_RECV_DATA_TRUNCATED: Ne,
  SDFLAGS_RD: Oe,
  SDFLAGS_WR: Se,
  SIGNAL_ABRT: Yt,
  SIGNAL_ALRM: Qt,
  SIGNAL_BUS: Kt,
  SIGNAL_CHLD: te,
  SIGNAL_CONT: ee,
  SIGNAL_FPE: $t,
  SIGNAL_HUP: Mt,
  SIGNAL_ILL: vt,
  SIGNAL_INT: kt,
  SIGNAL_KILL: jt,
  SIGNAL_NONE: Ht,
  SIGNAL_PIPE: qt,
  SIGNAL_POLL: de,
  SIGNAL_PROF: _e,
  SIGNAL_PWR: he,
  SIGNAL_QUIT: Vt,
  SIGNAL_SEGV: Jt,
  SIGNAL_STOP: re,
  SIGNAL_SYS: ue,
  SIGNAL_TERM: Zt,
  SIGNAL_TRAP: Wt,
  SIGNAL_TSTP: se,
  SIGNAL_TTIN: ne,
  SIGNAL_TTOU: ie,
  SIGNAL_URG: ae,
  SIGNAL_USR1: zt,
  SIGNAL_USR2: Xt,
  SIGNAL_VTALRM: ce,
  SIGNAL_WINCH: fe,
  SIGNAL_XCPU: oe,
  SIGNAL_XFSZ: le,
  SUBCLOCKFLAGS_SUBSCRIPTION_CLOCK_ABSTIME: Bt,
  WHENCE_CUR: z,
  WHENCE_END: y,
  WHENCE_SET: j
}, Symbol.toStringTag, { value: "Module" }));
let Te = class {
  enable(t) {
    this.log = me(t === void 0 ? !0 : t, this.prefix);
  }
  get enabled() {
    return this.isEnabled;
  }
  constructor(t) {
    this.isEnabled = t, this.prefix = "wasi:", this.enable(t);
  }
};
function me(h, t) {
  return h ? console.log.bind(console, "%c%s", "color: #265BA0", t) : () => {
  };
}
const S = new Te(!1);
class K extends Error {
  constructor(t) {
    super("exit with exit code " + t), this.code = t;
  }
}
let pe = class {
  start(t) {
    this.inst = t;
    try {
      return t.exports._start(), 0;
    } catch (e) {
      if (e instanceof K)
        return e.code;
      throw e;
    }
  }
  initialize(t) {
    this.inst = t, t.exports._initialize && t.exports._initialize();
  }
  constructor(t, e, n, a = {}) {
    this.args = [], this.env = [], this.fds = [], S.enable(a.debug), this.args = t, this.env = e, this.fds = n;
    const r = this;
    this.wasiImport = { args_sizes_get(s, i) {
      const o = new DataView(r.inst.exports.memory.buffer);
      o.setUint32(s, r.args.length, !0);
      let l = 0;
      for (const c of r.args)
        l += c.length + 1;
      return o.setUint32(i, l, !0), S.log(o.getUint32(s, !0), o.getUint32(i, !0)), 0;
    }, args_get(s, i) {
      const o = new DataView(r.inst.exports.memory.buffer), l = new Uint8Array(r.inst.exports.memory.buffer), c = i;
      for (let _ = 0; _ < r.args.length; _++) {
        o.setUint32(s, i, !0), s += 4;
        const d = new TextEncoder().encode(r.args[_]);
        l.set(d, i), o.setUint8(i + d.length, 0), i += d.length + 1;
      }
      return S.enabled && S.log(new TextDecoder("utf-8").decode(l.slice(c, i))), 0;
    }, environ_sizes_get(s, i) {
      const o = new DataView(r.inst.exports.memory.buffer);
      o.setUint32(s, r.env.length, !0);
      let l = 0;
      for (const c of r.env)
        l += c.length + 1;
      return o.setUint32(i, l, !0), S.log(o.getUint32(s, !0), o.getUint32(i, !0)), 0;
    }, environ_get(s, i) {
      const o = new DataView(r.inst.exports.memory.buffer), l = new Uint8Array(r.inst.exports.memory.buffer), c = i;
      for (let _ = 0; _ < r.env.length; _++) {
        o.setUint32(s, i, !0), s += 4;
        const d = new TextEncoder().encode(r.env[_]);
        l.set(d, i), o.setUint8(i + d.length, 0), i += d.length + 1;
      }
      return S.enabled && S.log(new TextDecoder("utf-8").decode(l.slice(c, i))), 0;
    }, clock_res_get(s, i) {
      let o;
      switch (s) {
        case 1: {
          o = 5000n;
          break;
        }
        case 0: {
          o = 1000000n;
          break;
        }
        default:
          return 52;
      }
      return new DataView(r.inst.exports.memory.buffer).setBigUint64(i, o, !0), 0;
    }, clock_time_get(s, i, o) {
      const l = new DataView(r.inst.exports.memory.buffer);
      if (s === 0)
        l.setBigUint64(o, BigInt((/* @__PURE__ */ new Date()).getTime()) * 1000000n, !0);
      else if (s == 1) {
        let c;
        try {
          c = BigInt(Math.round(performance.now() * 1e6));
        } catch {
          c = 0n;
        }
        l.setBigUint64(o, c, !0);
      } else
        l.setBigUint64(o, 0n, !0);
      return 0;
    }, fd_advise(s, i, o, l) {
      return r.fds[s] != null ? r.fds[s].fd_advise(i, o, l) : 8;
    }, fd_allocate(s, i, o) {
      return r.fds[s] != null ? r.fds[s].fd_allocate(i, o) : 8;
    }, fd_close(s) {
      if (r.fds[s] != null) {
        const i = r.fds[s].fd_close();
        return r.fds[s] = void 0, i;
      } else
        return 8;
    }, fd_datasync(s) {
      return r.fds[s] != null ? r.fds[s].fd_datasync() : 8;
    }, fd_fdstat_get(s, i) {
      if (r.fds[s] != null) {
        const { ret: o, fdstat: l } = r.fds[s].fd_fdstat_get();
        return l != null && l.write_bytes(new DataView(r.inst.exports.memory.buffer), i), o;
      } else
        return 8;
    }, fd_fdstat_set_flags(s, i) {
      return r.fds[s] != null ? r.fds[s].fd_fdstat_set_flags(i) : 8;
    }, fd_fdstat_set_rights(s, i, o) {
      return r.fds[s] != null ? r.fds[s].fd_fdstat_set_rights(i, o) : 8;
    }, fd_filestat_get(s, i) {
      if (r.fds[s] != null) {
        const { ret: o, filestat: l } = r.fds[s].fd_filestat_get();
        return l != null && l.write_bytes(new DataView(r.inst.exports.memory.buffer), i), o;
      } else
        return 8;
    }, fd_filestat_set_size(s, i) {
      return r.fds[s] != null ? r.fds[s].fd_filestat_set_size(i) : 8;
    }, fd_filestat_set_times(s, i, o, l) {
      return r.fds[s] != null ? r.fds[s].fd_filestat_set_times(i, o, l) : 8;
    }, fd_pread(s, i, o, l, c) {
      const _ = new DataView(r.inst.exports.memory.buffer), d = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const f = I.read_bytes_array(_, i, o), { ret: R, nread: u } = r.fds[s].fd_pread(d, f, l);
        return _.setUint32(c, u, !0), R;
      } else
        return 8;
    }, fd_prestat_get(s, i) {
      const o = new DataView(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const { ret: l, prestat: c } = r.fds[s].fd_prestat_get();
        return c != null && c.write_bytes(o, i), l;
      } else
        return 8;
    }, fd_prestat_dir_name(s, i, o) {
      if (r.fds[s] != null) {
        const { ret: l, prestat_dir_name: c } = r.fds[s].fd_prestat_dir_name();
        return c != null && new Uint8Array(r.inst.exports.memory.buffer).set(c, i), l;
      } else
        return 8;
    }, fd_pwrite(s, i, o, l, c) {
      const _ = new DataView(r.inst.exports.memory.buffer), d = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const f = A.read_bytes_array(_, i, o), { ret: R, nwritten: u } = r.fds[s].fd_pwrite(d, f, l);
        return _.setUint32(c, u, !0), R;
      } else
        return 8;
    }, fd_read(s, i, o, l) {
      const c = new DataView(r.inst.exports.memory.buffer), _ = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const d = I.read_bytes_array(c, i, o), { ret: f, nread: R } = r.fds[s].fd_read(_, d);
        return c.setUint32(l, R, !0), f;
      } else
        return 8;
    }, fd_readdir(s, i, o, l, c) {
      const _ = new DataView(r.inst.exports.memory.buffer), d = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        let f = 0;
        for (; ; ) {
          const { ret: R, dirent: u } = r.fds[s].fd_readdir_single(l);
          if (R != 0)
            return _.setUint32(c, f, !0), R;
          if (u == null)
            break;
          if (o - f < u.head_length()) {
            f = o;
            break;
          }
          const E = new ArrayBuffer(u.head_length());
          if (u.write_head_bytes(new DataView(E), 0), d.set(new Uint8Array(E).slice(0, Math.min(E.byteLength, o - f)), i), i += u.head_length(), f += u.head_length(), o - f < u.name_length()) {
            f = o;
            break;
          }
          u.write_name_bytes(d, i, o - f), i += u.name_length(), f += u.name_length(), l = u.d_next;
        }
        return _.setUint32(c, f, !0), 0;
      } else
        return 8;
    }, fd_renumber(s, i) {
      if (r.fds[s] != null && r.fds[i] != null) {
        const o = r.fds[i].fd_close();
        return o != 0 ? o : (r.fds[i] = r.fds[s], r.fds[s] = void 0, 0);
      } else
        return 8;
    }, fd_seek(s, i, o, l) {
      const c = new DataView(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const { ret: _, offset: d } = r.fds[s].fd_seek(i, o);
        return c.setBigInt64(l, d, !0), _;
      } else
        return 8;
    }, fd_sync(s) {
      return r.fds[s] != null ? r.fds[s].fd_sync() : 8;
    }, fd_tell(s, i) {
      const o = new DataView(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const { ret: l, offset: c } = r.fds[s].fd_tell();
        return o.setBigUint64(i, c, !0), l;
      } else
        return 8;
    }, fd_write(s, i, o, l) {
      const c = new DataView(r.inst.exports.memory.buffer), _ = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const d = A.read_bytes_array(c, i, o), { ret: f, nwritten: R } = r.fds[s].fd_write(_, d);
        return c.setUint32(l, R, !0), f;
      } else
        return 8;
    }, path_create_directory(s, i, o) {
      const l = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const c = new TextDecoder("utf-8").decode(l.slice(i, i + o));
        return r.fds[s].path_create_directory(c);
      }
    }, path_filestat_get(s, i, o, l, c) {
      const _ = new DataView(r.inst.exports.memory.buffer), d = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const f = new TextDecoder("utf-8").decode(d.slice(o, o + l)), { ret: R, filestat: u } = r.fds[s].path_filestat_get(i, f);
        return u != null && u.write_bytes(_, c), R;
      } else
        return 8;
    }, path_filestat_set_times(s, i, o, l, c, _, d) {
      const f = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const R = new TextDecoder("utf-8").decode(f.slice(o, o + l));
        return r.fds[s].path_filestat_set_times(i, R, c, _, d);
      } else
        return 8;
    }, path_link(s, i, o, l, c, _, d) {
      const f = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null && r.fds[c] != null) {
        const R = new TextDecoder("utf-8").decode(f.slice(o, o + l)), u = new TextDecoder("utf-8").decode(f.slice(_, _ + d));
        return r.fds[c].path_link(s, i, R, u);
      } else
        return 8;
    }, path_open(s, i, o, l, c, _, d, f, R) {
      const u = new DataView(r.inst.exports.memory.buffer), E = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const O = new TextDecoder("utf-8").decode(E.slice(o, o + l));
        S.log(O);
        const { ret: N, fd_obj: g } = r.fds[s].path_open(i, O, c, _, d, f);
        if (N != 0)
          return N;
        r.fds.push(g);
        const m = r.fds.length - 1;
        return u.setUint32(R, m, !0), 0;
      } else
        return 8;
    }, path_readlink(s, i, o, l, c, _) {
      const d = new DataView(r.inst.exports.memory.buffer), f = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const R = new TextDecoder("utf-8").decode(f.slice(i, i + o));
        S.log(R);
        const { ret: u, data: E } = r.fds[s].path_readlink(R);
        if (E != null) {
          const O = new TextEncoder().encode(E);
          if (O.length > c)
            return d.setUint32(_, 0, !0), 8;
          f.set(O, l), d.setUint32(_, O.length, !0);
        }
        return u;
      } else
        return 8;
    }, path_remove_directory(s, i, o) {
      const l = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const c = new TextDecoder("utf-8").decode(l.slice(i, i + o));
        return r.fds[s].path_remove_directory(c);
      } else
        return 8;
    }, path_rename(s, i, o, l, c, _) {
      throw "FIXME what is the best abstraction for this?";
    }, path_symlink(s, i, o, l, c) {
      const _ = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[o] != null) {
        const d = new TextDecoder("utf-8").decode(_.slice(s, s + i)), f = new TextDecoder("utf-8").decode(_.slice(l, l + c));
        return r.fds[o].path_symlink(d, f);
      } else
        return 8;
    }, path_unlink_file(s, i, o) {
      const l = new Uint8Array(r.inst.exports.memory.buffer);
      if (r.fds[s] != null) {
        const c = new TextDecoder("utf-8").decode(l.slice(i, i + o));
        return r.fds[s].path_unlink_file(c);
      } else
        return 8;
    }, poll_oneoff(s, i, o) {
      throw "async io not supported";
    }, proc_exit(s) {
      throw new K(s);
    }, proc_raise(s) {
      throw "raised signal " + s;
    }, sched_yield() {
    }, random_get(s, i) {
      const o = new Uint8Array(r.inst.exports.memory.buffer);
      for (let l = 0; l < i; l++)
        o[s + l] = Math.random() * 256 | 0;
    }, sock_recv(s, i, o) {
      throw "sockets not supported";
    }, sock_send(s, i, o) {
      throw "sockets not supported";
    }, sock_shutdown(s, i) {
      throw "sockets not supported";
    }, sock_accept(s, i) {
      throw "sockets not supported";
    } };
  }
};
class C {
  fd_advise(t, e, n) {
    return 0;
  }
  fd_allocate(t, e) {
    return 58;
  }
  fd_close() {
    return 0;
  }
  fd_datasync() {
    return 58;
  }
  fd_fdstat_get() {
    return { ret: 58, fdstat: null };
  }
  fd_fdstat_set_flags(t) {
    return 58;
  }
  fd_fdstat_set_rights(t, e) {
    return 58;
  }
  fd_filestat_get() {
    return { ret: 58, filestat: null };
  }
  fd_filestat_set_size(t) {
    return 58;
  }
  fd_filestat_set_times(t, e, n) {
    return 58;
  }
  fd_pread(t, e, n) {
    return { ret: 58, nread: 0 };
  }
  fd_prestat_get() {
    return { ret: 58, prestat: null };
  }
  fd_prestat_dir_name() {
    return { ret: 58, prestat_dir_name: null };
  }
  fd_pwrite(t, e, n) {
    return { ret: 58, nwritten: 0 };
  }
  fd_read(t, e) {
    return { ret: 58, nread: 0 };
  }
  fd_readdir_single(t) {
    return { ret: 58, dirent: null };
  }
  fd_seek(t, e) {
    return { ret: 58, offset: 0n };
  }
  fd_sync() {
    return 0;
  }
  fd_tell() {
    return { ret: 58, offset: 0n };
  }
  fd_write(t, e) {
    return { ret: 58, nwritten: 0 };
  }
  path_create_directory(t) {
    return 58;
  }
  path_filestat_get(t, e) {
    return { ret: 58, filestat: null };
  }
  path_filestat_set_times(t, e, n, a, r) {
    return 58;
  }
  path_link(t, e, n, a) {
    return 58;
  }
  path_open(t, e, n, a, r, s) {
    return { ret: 58, fd_obj: null };
  }
  path_readlink(t) {
    return { ret: 58, data: null };
  }
  path_remove_directory(t) {
    return 58;
  }
  path_rename(t, e, n) {
    return 58;
  }
  path_symlink(t, e) {
    return 58;
  }
  path_unlink_file(t) {
    return 58;
  }
}
class _t extends C {
  fd_allocate(t, e) {
    if (!(this.file.size > t + e)) {
      const n = new Uint8Array(Number(t + e));
      n.set(this.file.data, 0), this.file.data = n;
    }
    return 0;
  }
  fd_fdstat_get() {
    return { ret: 0, fdstat: new L(b, 0) };
  }
  fd_filestat_set_size(t) {
    if (this.file.size > t)
      this.file.data = new Uint8Array(this.file.data.buffer.slice(0, Number(t)));
    else {
      const e = new Uint8Array(Number(t));
      e.set(this.file.data, 0), this.file.data = e;
    }
    return 0;
  }
  fd_read(t, e) {
    let n = 0;
    for (const a of e)
      if (this.file_pos < this.file.data.byteLength) {
        const r = this.file.data.slice(Number(this.file_pos), Number(this.file_pos + BigInt(a.buf_len)));
        t.set(r, a.buf), this.file_pos += BigInt(r.length), n += r.length;
      } else
        break;
    return { ret: 0, nread: n };
  }
  fd_pread(t, e, n) {
    let a = 0;
    for (const r of e)
      if (n < this.file.data.byteLength) {
        const s = this.file.data.slice(Number(n), Number(n + BigInt(r.buf_len)));
        t.set(s, r.buf), n += BigInt(s.length), a += s.length;
      } else
        break;
    return { ret: 0, nread: a };
  }
  fd_seek(t, e) {
    let n;
    switch (e) {
      case j:
        n = t;
        break;
      case z:
        n = this.file_pos + t;
        break;
      case y:
        n = BigInt(this.file.data.byteLength) + t;
        break;
      default:
        return { ret: 28, offset: 0n };
    }
    return n < 0 ? { ret: 28, offset: 0n } : (this.file_pos = n, { ret: 0, offset: this.file_pos });
  }
  fd_tell() {
    return { ret: 0, offset: this.file_pos };
  }
  fd_write(t, e) {
    let n = 0;
    if (this.file.readonly)
      return { ret: 8, nwritten: n };
    for (const a of e) {
      const r = t.slice(a.buf, a.buf + a.buf_len);
      if (this.file_pos + BigInt(r.byteLength) > this.file.size) {
        const s = this.file.data;
        this.file.data = new Uint8Array(Number(this.file_pos + BigInt(r.byteLength))), this.file.data.set(s);
      }
      this.file.data.set(r.slice(0, Number(this.file.size - this.file_pos)), Number(this.file_pos)), this.file_pos += BigInt(r.byteLength), n += a.buf_len;
    }
    return { ret: 0, nwritten: n };
  }
  fd_pwrite(t, e, n) {
    let a = 0;
    if (this.file.readonly)
      return { ret: 8, nwritten: a };
    for (const r of e) {
      const s = t.slice(r.buf, r.buf + r.buf_len);
      if (n + BigInt(s.byteLength) > this.file.size) {
        const i = this.file.data;
        this.file.data = new Uint8Array(Number(n + BigInt(s.byteLength))), this.file.data.set(i);
      }
      this.file.data.set(s.slice(0, Number(this.file.size - n)), Number(n)), n += BigInt(s.byteLength), a += r.buf_len;
    }
    return { ret: 0, nwritten: a };
  }
  fd_filestat_get() {
    return { ret: 0, filestat: this.file.stat() };
  }
  constructor(t) {
    super(), this.file_pos = 0n, this.file = t;
  }
}
class ft extends C {
  fd_allocate(t, e) {
    return BigInt(this.file.handle.getSize()) > t + e || this.file.handle.truncate(Number(t + e)), 0;
  }
  fd_fdstat_get() {
    return { ret: 0, fdstat: new L(b, 0) };
  }
  fd_filestat_get() {
    return { ret: 0, filestat: new P(b, BigInt(this.file.handle.getSize())) };
  }
  fd_filestat_set_size(t) {
    return this.file.handle.truncate(Number(t)), 0;
  }
  fd_read(t, e) {
    let n = 0;
    for (const a of e)
      if (this.position < this.file.handle.getSize()) {
        const r = new Uint8Array(t.buffer, a.buf, a.buf_len), s = this.file.handle.read(r, { at: Number(this.position) });
        this.position += BigInt(s), n += s;
      } else
        break;
    return { ret: 0, nread: n };
  }
  fd_seek(t, e) {
    let n;
    switch (e) {
      case j:
        n = BigInt(t);
        break;
      case z:
        n = this.position + BigInt(t);
        break;
      case y:
        n = BigInt(this.file.handle.getSize()) + BigInt(t);
        break;
      default:
        return { ret: 28, offset: 0n };
    }
    return n < 0 ? { ret: 28, offset: 0n } : (this.position = n, { ret: 0, offset: this.position });
  }
  fd_write(t, e) {
    let n = 0;
    if (this.file.readonly)
      return { ret: 8, nwritten: n };
    for (const a of e) {
      const r = new Uint8Array(t.buffer, a.buf, a.buf_len), s = this.file.handle.write(r, { at: Number(this.position) });
      this.position += BigInt(s), n += s;
    }
    return { ret: 0, nwritten: n };
  }
  fd_datasync() {
    return this.file.handle.flush(), 0;
  }
  fd_sync() {
    return this.fd_datasync();
  }
  fd_close() {
    return 0;
  }
  constructor(t) {
    super(), this.position = 0n, this.file = t;
  }
}
class X extends C {
  fd_seek(t, e) {
    return { ret: 31, offset: 0n };
  }
  fd_fdstat_get() {
    return { ret: 0, fdstat: new L(w, 0) };
  }
  fd_readdir_single(t) {
    if (S.enabled && (S.log("readdir_single", t), S.log(t, Object.keys(this.dir.contents))), S.log(t, Object.keys(this.dir.contents).slice(Number(t))), t >= BigInt(Object.keys(this.dir.contents).length))
      return { ret: 0, dirent: null };
    const e = Object.keys(this.dir.contents)[Number(t)], n = this.dir.contents[e];
    return { ret: 0, dirent: new ot(t + 1n, e, n.stat().filetype) };
  }
  path_filestat_get(t, e) {
    const n = this.dir.get_entry_for_path(e);
    return n == null ? { ret: 44, filestat: null } : { ret: 0, filestat: n.stat() };
  }
  path_open(t, e, n, a, r, s) {
    let i = this.dir.get_entry_for_path(e);
    if (i == null)
      if ((n & x) == x)
        i = this.dir.create_entry_for_path(e, (n & p) == p);
      else
        return { ret: 44, fd_obj: null };
    else if ((n & W) == W)
      return { ret: 20, fd_obj: null };
    if ((n & p) == p && i.stat().filetype !== w)
      return { ret: 54, fd_obj: null };
    if (i.readonly && (a & BigInt(64)) == BigInt(64))
      return { ret: 63, fd_obj: null };
    if (!(i instanceof T) && (n & Y) == Y) {
      const o = i.truncate();
      if (o != 0)
        return { ret: o, fd_obj: null };
    }
    return { ret: 0, fd_obj: i.open(s) };
  }
  path_create_directory(t) {
    return this.path_open(0, t, x | p, 0n, 0n, 0).ret;
  }
  path_unlink_file(t) {
    t = this.clean_path(t);
    const e = this.dir.get_parent_dir_for_path(t), n = t.split("/"), a = n[n.length - 1], r = this.dir.get_entry_for_path(t);
    return r === null ? 44 : r.stat().filetype === w ? 31 : (delete e.contents[a], 0);
  }
  path_remove_directory(t) {
    t = this.clean_path(t);
    const e = this.dir.get_parent_dir_for_path(t), n = t.split("/"), a = n[n.length - 1], r = this.dir.get_entry_for_path(t);
    return r === null ? 44 : !(r instanceof T) || r.stat().filetype !== w ? 54 : Object.keys(r.contents).length !== 0 ? 55 : e.contents[a] === void 0 ? 44 : (delete e.contents[a], 0);
  }
  clean_path(t) {
    for (; t.length > 0 && t[t.length - 1] === "/"; )
      t = t.slice(0, t.length - 1);
    return t;
  }
  constructor(t) {
    super(), this.dir = t;
  }
}
class we extends X {
  fd_prestat_get() {
    return { ret: 0, prestat: B.dir(this.prestat_name.length) };
  }
  fd_prestat_dir_name() {
    return { ret: 0, prestat_dir_name: this.prestat_name };
  }
  constructor(t, e) {
    super(new T(e)), this.prestat_name = new TextEncoder().encode(t);
  }
}
let q = class {
  open(t) {
    const e = new _t(this);
    return t & J && e.fd_seek(0n, y), e;
  }
  get size() {
    return BigInt(this.data.byteLength);
  }
  stat() {
    return new P(b, this.size);
  }
  truncate() {
    return this.readonly ? 63 : (this.data = new Uint8Array([]), 0);
  }
  constructor(t, e) {
    this.data = new Uint8Array(t), this.readonly = !!(e != null && e.readonly);
  }
};
class Ie {
  open(t) {
    const e = new ft(this);
    return t & J && e.fd_seek(0n, y), e;
  }
  get size() {
    return BigInt(this.handle.getSize());
  }
  stat() {
    return new P(b, this.size);
  }
  truncate() {
    return this.readonly ? 63 : (this.handle.truncate(0), 0);
  }
  constructor(t, e) {
    this.handle = t, this.readonly = !!(e != null && e.readonly);
  }
}
class T {
  open(t) {
    return new X(this);
  }
  stat() {
    return new P(w, 0n);
  }
  get_entry_for_path(t) {
    let e = this;
    for (const n of t.split("/")) {
      if (n == "")
        break;
      if (n != ".") {
        if (!(e instanceof T))
          return null;
        if (e.contents[n] != null)
          e = e.contents[n];
        else
          return S.log(n), null;
      }
    }
    return e;
  }
  get_parent_dir_for_path(t) {
    if (t === "")
      return null;
    let e = this, n = e;
    for (const a of t.split("/")) {
      if (a === "")
        break;
      if (a !== ".") {
        if (!(e instanceof T))
          return S.log(e), null;
        if (e.contents[a] === void 0)
          return S.log(a), null;
        n = e, e = e.contents[a];
      }
    }
    return n;
  }
  create_entry_for_path(t, e) {
    let n = this;
    const a = t.split("/").filter((r) => r != "/");
    for (let r = 0; r < a.length; r++) {
      const s = a[r];
      if (!(n instanceof T))
        break;
      n.contents[s] != null || (S.log("create", s), r == a.length - 1 && !e ? n.contents[s] = new q(new ArrayBuffer(0)) : n.contents[s] = new T({})), n = n.contents[s];
    }
    return n;
  }
  constructor(t) {
    this.readonly = !1, this.contents = t;
  }
}
class Q extends C {
  fd_filestat_get() {
    return { ret: 0, filestat: new P(v, BigInt(0)) };
  }
  fd_fdstat_get() {
    const t = new L(v, 0);
    return t.fs_rights_base = BigInt(64), { ret: 0, fdstat: t };
  }
  fd_write(t, e) {
    let n = 0;
    for (const a of e) {
      const r = t.slice(a.buf, a.buf + a.buf_len);
      this.write(r), n += a.buf_len;
    }
    return { ret: 0, nwritten: n };
  }
  static lineBuffered(t) {
    const e = new TextDecoder("utf-8", { fatal: !1 });
    let n = "";
    return new Q((a) => {
      n += e.decode(a, { stream: !0 });
      const r = n.split(`
`);
      for (const [s, i] of r.entries())
        s < r.length - 1 ? t(i) : n = i;
    });
  }
  constructor(t) {
    super(), this.write = t;
  }
}
function Ae(h, t) {
  return new Proxy(h, { get(e, n, a) {
    const r = Reflect.get(e, n, a);
    return t.includes(n) ? r : function(...s) {
      console.log(n, "(", ...s, ")");
      const i = Reflect.apply(r, a, s);
      return console.log(" =", i), i;
    };
  } });
}
const be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConsoleStdout: Q,
  Directory: T,
  Fd: C,
  File: q,
  OpenDirectory: X,
  OpenFile: _t,
  OpenSyncOPFSFile: ft,
  PreopenDirectory: we,
  SyncOPFSFile: Ie,
  WASI: pe,
  WASIProcExit: K,
  strace: Ae,
  wasi: ge
}, Symbol.toStringTag, { value: "Module" }));
function H(h) {
  return new Promise((t, e) => {
    h.oncomplete = h.onsuccess = () => t(h.result), h.onabort = h.onerror = () => e(h.error);
  });
}
function Pe(h, t) {
  const e = indexedDB.open(h);
  e.onupgradeneeded = () => e.result.createObjectStore(t);
  const n = H(e);
  return (a, r) => n.then((s) => r(s.transaction(t, a).objectStore(t)));
}
let V;
function Z() {
  return V || (V = Pe("keyval-store", "keyval")), V;
}
function nt(h, t = Z()) {
  return t("readonly", (e) => H(e.get(h)));
}
function it(h, t, e = Z()) {
  return e("readwrite", (n) => (n.put(t, h), H(n.transaction)));
}
function De(h, t = Z()) {
  return t("readwrite", (e) => (h.forEach((n) => e.delete(n)), H(e.transaction)));
}
class tt {
  constructor(t, e) {
    this.mixcorePtr = t, this.wasmApi = e;
  }
  static create(t, e, n, a) {
    let r = a.mixcoreSetup(t, e, n);
    return new tt(r, a);
  }
  drop() {
    this.wasmApi.mixcoreDrop(this.mixcorePtr), this.mixcorePtr = null;
  }
  // JS Mixcore API
  async ffiNames() {
    return this.wasmApi.ffiNames();
  }
  // JS Mixcore API
  async ffiDispatch(t, e, n) {
    return this.wasmApi.ffiDispatch(this.mixcorePtr, t, e, n);
  }
  getCodes(t, e) {
    return this.wasmApi.mixcoreGetCodes(t, e);
  }
  // used in groovebox/machine-wasm/js/common.js
  registerDebugObject(t, e) {
    this.wasmApi.registerDebugObject(t, e);
  }
}
class G {
  static createWASI(t, e, n) {
    let a = [
      new t.File([]),
      t.ConsoleStdout.lineBuffered(
        (r) => console.log(`wasi: ${r}`)
      ),
      t.ConsoleStdout.lineBuffered(
        (r) => console.warn(`wasi: ${r}`)
      ),
      new t.PreopenDirectory(".", e)
    ];
    return new t.WASI([], [], a, n);
  }
  // log: e.g. `info,mixcore=debug`
  static async create(t, e, n) {
    let a = new G(), r = {
      wasi_snapshot_preview1: e.wasiImport,
      env: {
        mixcore_http_request: a.httpRequest.bind(a),
        mixcore_file_url: a.fileUrl.bind(a)
      }
    }, s = await WebAssembly.instantiate(t, r);
    return s.instance !== void 0 && (s = s.instance), e.inst = s, a.instance = s, a.mem = s.exports.memory, a.api = s.exports, a.urls = {}, a.fs = e.fds ? e.fds[3] : null, a.mixcoreInitLogging(n), a;
  }
  mixcoreInitLogging(t) {
    if (t) {
      let e = this.writeString(t);
      this.api.mixcore_init_logging(e), this.deallocate(e);
    }
  }
  mixcoreSetup(t, e, n) {
    let a = 0, r = 0, s = 0;
    t !== null && e !== null && n !== null && (a = this.writeString(t), r = this.writeString(e), s = this.writeString(n));
    let i = { user: n }, o = this.writeString(JSON.stringify(i)), l = this.allocate(4), c = this.api.mixcore_setup(
      a,
      r,
      s,
      o,
      0,
      0,
      l
    ), _ = this.readUint32(l);
    if (this.deallocate(o), this.deallocate(l), a != 0 && r != 0 && s != 0 && (this.deallocate(a), this.deallocate(r), this.deallocate(s)), _ != 0) {
      let d = this.readString(_);
      throw this.deallocate(_), new Error(`Could not setup Mixcore: ${d}`);
    }
    return this.assert(c != 0, "Setup Mixcore"), c;
  }
  sunnMixcoreCreate(t, e) {
    let n = this.writeString(e), a = this.allocate(4), r = this.api.sunn_mixcore_create(
      t,
      n,
      0,
      0,
      a
    ), s = this.readUint32(a);
    if (this.deallocate(n), this.deallocate(a), s != 0) {
      let i = this.readString(s);
      throw new Error(`Could not setup Mixcore: ${i}`);
    }
    return this.assert(r != 0, "Setup Mixcore"), r;
  }
  sunnCreate(t, e) {
    let n = this.writeString(t), a = this.writeString(e), r = this.allocate(4), s = this.api.sunn_create(n, a, r), i = this.readUint32(r);
    if (this.deallocate(n), this.deallocate(a), i != 0) {
      let o = this.readString(i);
      throw this.deallocate(i), new Error(o);
    }
    return s;
  }
  sunnDrop(t) {
    this.api.sunn_drop(t);
  }
  createApp(t, e, n) {
    let a = this.writeString(e), r = this.writeString(n), s = this.allocate(4), i = this.allocate(4);
    this.api.sunn_create_app(
      t,
      a,
      r,
      s,
      i
    );
    let o = this.readUint32(s), l = this.readUint32(i);
    if (this.deallocate(a), this.deallocate(r), this.deallocate(s), this.deallocate(i), o != 0) {
      let _ = this.readString(o);
      throw this.deallocate(o), new Error(`Could not query: ${_}`);
    }
    return this.readString(l);
  }
  getAppRecord(t, e) {
    let n = this.writeString(e), a = this.allocate(4), r = this.allocate(4);
    this.api.sunn_get_app_record(t, n, a, r);
    let s = this.readUint32(a), i = this.readUint32(r);
    if (this.deallocate(n), this.deallocate(a), this.deallocate(r), s != 0) {
      let l = this.readString(s);
      throw this.deallocate(s), new Error(l);
    }
    return this.readString(i);
  }
  updateAppRecord(t, e, n) {
    let a = this.writeString(e), r = this.writeString(n), s = this.allocate(4), i = this.allocate(4);
    this.api.sunn_update_app_record(
      t,
      a,
      r,
      s,
      i
    );
    let o = this.readUint32(s), l = this.readUint32(i);
    if (this.deallocate(a), this.deallocate(r), this.deallocate(s), this.deallocate(i), o != 0) {
      let _ = this.readString(o);
      throw this.deallocate(o), new Error(`Could not query: ${_}`);
    }
    return this.readString(l);
  }
  initRemixFile(t, e, n) {
    const a = this.writeString(t), r = this.writeString(e), s = this.writeString(n), i = this.allocate(4);
    let o = this.api.mixcore_init_remix_file(
      a,
      r,
      s,
      i
    );
    const l = this.readUint32(i);
    let c = this.readString(o);
    if (this.deallocate(a), this.deallocate(r), this.deallocate(s), this.deallocate(i), this.deallocate(o), l != 0) {
      const _ = this.readString(l);
      throw new Error(_);
    }
    return JSON.parse(c);
  }
  initRemixFileBuffer(t, e, n) {
    const a = this.allocate(t.byteLength);
    new Uint8Array(this.mem.buffer).set(new Uint8Array(t), a);
    const s = this.writeString(e), i = this.writeString(n), o = this.allocate(4);
    let l = this.api.mixcore_init_remix_file_buffer(
      a,
      t.byteLength,
      s,
      i,
      o
    );
    const c = this.readUint32(o);
    let _ = this.readString(l);
    if (this.deallocate(a), this.deallocate(s), this.deallocate(i), this.deallocate(o), this.deallocate(l), c != 0) {
      const d = this.readString(c);
      throw new Error(d);
    }
    return JSON.parse(_);
  }
  ffiNames() {
    const t = this.allocate(4), e = this.allocate(4), n = this.allocate(4);
    this.api.mixcore_ffi_names(n, t, e);
    let a = this.readUint32(n);
    if (a != 0) {
      let o = this.readString(a);
      throw new Error(`Could not retrieve FFI names: ${o}`);
    }
    let r = this.readUint32(t);
    this.assert(r != 0, "FFI names not null");
    let s = this.readUint32(e), i = [];
    for (let o = 0; o < s; o++) {
      let l = this.readUint32(r + 4 * o), c = this.readString(l);
      i.push(c);
    }
    return this.api.mixcore_ffi_names_drop(r), this.deallocate(t), this.deallocate(e), this.deallocate(a), i;
  }
  async ffiDispatch(t, e, n, a) {
    let r = this.writeString(n), s = this.allocate(a.byteLength);
    new Uint8Array(this.mem.buffer).set(a, s);
    let o = this.allocate(1), l = this.allocate(1), c = this.allocate(4), _ = this.allocate(4), d = this.allocate(4), f = this.allocate(4), R = this.allocate(4), u = this.allocate(4);
    this.api.mixcore_ffi_dispatch(
      t,
      e,
      r,
      s,
      a.byteLength,
      !0,
      o,
      l,
      c,
      _,
      d,
      f,
      R,
      u
    );
    let E = this.readUint8(o), O = this.readUint8(l), N = this.readUint32(c), g = this.readUint32(_), m = this.readUint32(d), D = this.readUint32(f), M = this.readUint32(R), k = this.readUint32(u);
    if (this.deallocate(s), this.deallocate(r), this.deallocate(o), this.deallocate(l), this.deallocate(c), this.deallocate(_), this.deallocate(d), this.deallocate(f), this.deallocate(R), this.deallocate(u), this.assert(E, "registered FFI found"), this.assert(!O, "forced sync FFI dispatch"), D != 0) {
      let F = this.readString(D);
      this.api.mixcore_string_drop(D);
      let rt = "";
      M != 0 && (rt = this.readString(M), this.api.mixcore_string_drop(M));
      let st = "";
      throw k != 0 && (st = this.readString(k), this.api.mixcore_string_drop(k)), console.error("Mix error:", F), console.error(st), console.error(rt), new Error(`Mix error: ${F}`);
    }
    if (m != 0) {
      let F = this.readString(m);
      throw this.api.mixcore_string_drop(m), new Error(`FFI ${n}: ${F}`);
    }
    this.assert(N != 0, "FFI resource buffer");
    let ht = new Uint8Array(this.mem.buffer).slice(
      N,
      N + g * 4
    );
    return this.api.mixcore_buffer_drop(N, g), ht;
  }
  queryJson(t, e, n, a, r) {
    let s = this.writeString(e), i = this.writeString(n), o = this.allocate(4), l = this.allocate(4);
    this.api.sunn_query_json(
      t,
      s,
      i,
      a ? 1 : 0,
      r ? 1 : 0,
      o,
      l
    );
    let c = this.readUint32(o), _ = this.readUint32(l);
    if (this.deallocate(s), this.deallocate(i), this.deallocate(o), this.deallocate(l), c != 0) {
      let f = this.readString(c);
      throw this.deallocate(c), new Error(`Could not query: ${f}`);
    }
    let d = this.readString(_);
    return this.deallocate(_), d;
  }
  getCodeRefs(t, e) {
    let n = this.writeString(e), a = this.allocate(4), r = this.allocate(4);
    this.api.sunn_get_code_refs(
      t,
      n,
      0,
      !1,
      a,
      r
    );
    let s = this.readUint32(a), i = this.readUint32(r);
    if (this.deallocate(a), this.deallocate(r), s != 0) {
      let l = this.readString(s);
      throw new Error(`Could not get code refs: ${l}`);
    }
    let o = this.readString(i);
    return this.deallocate(i), JSON.parse(o);
  }
  mixcoreGetCodes(t, e) {
    let n = this.writeString(t), a = this.writeString(e), r = this.allocate(4), s = this.allocate(4), i = this.allocate(4);
    this.api.mixcore_get_codes(
      n,
      a,
      0,
      !1,
      r,
      s,
      i
    );
    let o = this.readUint32(r), l = this.readUint32(s), c = this.readUint32(i);
    if (this.deallocate(n), this.deallocate(a), this.deallocate(r), this.deallocate(s), this.deallocate(i), o != 0) {
      let d = this.readString(o);
      throw new Error(`Could not get codes: ${d}`);
    }
    let _ = [];
    for (let d = 0; d < c; d++) {
      let f = l + d * 16, R = this.readUint32(f), u = this.readUint32(f + 4), E = this.readUint32(f + 8), O = this.readUint32(f + 12), N = this.readString(R), g = this.readUint8Buffer(u, E), m = O == 0 ? null : this.readString(O);
      _.push({ id: N, buf: g, odlibApp: m });
    }
    return this.api.mixcore_codes_drop(l, c), _;
  }
  sunnGetCodes(t, e) {
    let n = this.writeString(e), a = this.allocate(4), r = this.allocate(4), s = this.allocate(4);
    this.api.sunn_get_codes(
      t,
      n,
      0,
      !1,
      a,
      r,
      s
    );
    let i = this.readUint32(a), o = this.readUint32(r), l = this.readUint32(s);
    if (this.deallocate(n), this.deallocate(a), this.deallocate(r), this.deallocate(s), i != 0) {
      let f = this.readString(i);
      throw new Error(`Could not get codes: ${f}`);
    }
    let c = this.readString(odlibDbsPtr), _ = JSON.parse(c), d = [];
    for (let f = 0; f < l; f++) {
      let R = o + f * 16, u = this.readUint32(R), E = this.readUint32(R + 4), O = this.readUint32(R + 8), N = this.readUint32(R + 12), g = this.readString(u), m = this.readUint8Buffer(E, O), D = N == 0 ? null : this.readString(N);
      d.push({ id: g, buf: m, odlibApp: D });
    }
    return this.api.mixcore_codes_drop(o, l), [d, _];
  }
  getCode(t, e, n) {
    let a = this.writeString(e), r = this.writeString(n), s = this.allocate(4), i = this.allocate(4), o = this.allocate(4);
    this.api.sunn_get_code(
      t,
      a,
      r,
      s,
      i,
      o
    );
    let l = this.readUint32(s), c = this.readUint32(i), _ = this.readUint32(o);
    if (this.deallocate(s), this.deallocate(i), this.deallocate(o), l != 0) {
      let f = this.readString(l);
      throw new Error(`Could not get code: ${f}`);
    }
    let d = this.readUint8Buffer(c, _);
    return this.api.mixcore_bytes_drop(c, _), d;
  }
  saveDocumentsJson(t, e, n) {
    let a = this.writeString(e), r = this.writeString(n), s = this.allocate(4), i = this.allocate(4);
    this.api.sunn_save_documents_json(
      t,
      a,
      r,
      s,
      i
    );
    let o = this.readUint32(s), l = this.readUint32(i);
    if (this.deallocate(a), this.deallocate(r), this.deallocate(s), this.deallocate(i), o != 0) {
      let _ = this.readString(o);
      throw this.deallocate(o), new Error(`Could not save document: ${_}`);
    }
    let c = this.readString(l);
    return this.deallocate(l), c;
  }
  getDocumentJson(t, e, n) {
    let a = this.writeString(e), r = this.writeString(n), s = this.allocate(4), i = this.allocate(4);
    this.api.sunn_get_document_json(
      t,
      a,
      r,
      s,
      i
    );
    let o = this.readUint32(s), l = this.readUint32(i);
    if (this.deallocate(a), this.deallocate(r), this.deallocate(s), this.deallocate(i), o != 0) {
      let _ = this.readString(o);
      throw this.deallocate(o), new Error(`Could not get document: ${_}`);
    }
    let c = this.readString(l);
    return this.deallocate(l), c;
  }
  registerDebugObject(t, e) {
    let n = this.writeString(t), a = this.allocate(e.byteLength);
    new Uint8Array(this.mem.buffer).set(e, a);
    let s = this.allocate(4);
    this.api.mixcore_register_debug_object(
      n,
      a,
      e.byteLength,
      s
    );
    let i = this.readUint32(s);
    if (this.deallocate(n), this.deallocate(a), this.deallocate(s), i != 0) {
      let o = this.readString(i);
      throw new Error(`Could not add debug code: ${o}`);
    }
  }
  assert(t, e) {
    if (!t)
      throw new Error(`This assertion was not met in MixCore: ${e}`);
  }
  allocate(t) {
    const e = this.api._rmx_allocate(t);
    return this.assert(e != 0, "allocate"), e;
  }
  deallocate(t) {
    this.api._rmx_deallocate(t);
  }
  writeString(t) {
    const e = new TextEncoder().encode(t), n = this.allocate(e.length + 1), a = new Uint8Array(this.mem.buffer, n, e.length + 1);
    return a.set(e, 0), a[e.length] = 0, n;
  }
  readUint8Buffer(t, e) {
    return new Uint8Array(this.mem.buffer, t, e).slice();
  }
  writeUint8Buffer(t) {
    const e = this.allocate(t.byteLength);
    return new Uint8Array(this.mem.buffer, e, t.byteLength).set(t, 0), e;
  }
  readString(t) {
    const e = new Uint8Array(this.mem.buffer, t), n = e.findIndex((r) => r == 0);
    this.assert(n != -1, "zero terminated string");
    const a = e.subarray(0, n);
    return new TextDecoder().decode(a);
  }
  readUint32(t) {
    return new DataView(this.mem.buffer).getUint32(t, !0);
  }
  readUint8(t) {
    return new DataView(this.mem.buffer).getUint8(t);
  }
  writeUint32(t, e) {
    new DataView(this.mem.buffer).setUint32(t, e, !0);
  }
  httpRequest(t, e, n, a, r, s, i, o, l, c) {
    let _ = this.readString(t), d = this.readString(e), f;
    try {
      f = JSON.parse(this.readString(n));
    } catch (N) {
      let g = this.writeString("Could not parse headers: " + N);
      this.writeUint32(c, g);
      return;
    }
    let R = null;
    a != 0 && (R = new Uint8Array(this.mem).subarray(a, a + r));
    let u = new XMLHttpRequest();
    u.open(d, _);
    for (let [N, g] of Object.entries(f))
      u.setRequestHeader(N, g);
    u.responseType = "arraybuffer", u.send(R);
    let E = this.writeString(
      JSON.stringify(u.getAllResponseHeaders())
    ), O = this.writeUint8Buffer(u.response);
    this.writeUint32(s, u.status), this.writeUint32(i, E), this.writeUint32(o, O), this.writeUint32(l, u.response.byteLength), this.writeUint32(c, 0);
  }
  fileUrl(t, e) {
    if (this.fs && this.fs.dir) {
      let n = this.readString(t), a = this.fs.dir.get_entry_for_path(n);
      if (a && a.data) {
        let r = n.split("/").at(-1);
        a.data in this.urls || (globalThis.ThisIsNode ? this.urls[a.data] = "file:///" + a : this.urls[a.data] = URL.createObjectURL(
          new File([a.data], r)
        ));
        let s = this.writeString(this.urls[a.data]);
        this.writeUint32(e, s);
      }
    }
  }
}
function Ue(h) {
  let t = [], e = [], n = /* @__PURE__ */ new Set();
  for (let a of h) {
    if (n.has(a.id))
      continue;
    n.add(a.id);
    let r = { id: a.id };
    a.odlibApp && (r.odlibDBs = [a.odlibApp]), t.push(r);
    let s = a.buf;
    typeof s == "array" && (s = new Uint8Array(s)), e.push({ id: a.id, buf: s });
  }
  return { codes: ye(t), codeBufs: e };
}
function ye(h) {
  return { kind: "code-topics", codeTopics: h };
}
const U = "db", $ = "import.remix", Le = "$executable-0@x";
async function Ve(h, t) {
  var O, N;
  const n = await (await fetch(h, { cache: "no-cache" })).arrayBuffer();
  let a = h, r = await et.create(t), s = await r.initRemixFile(h, n, "rmx-remix@user", a), i = null, o = null, l;
  if (i || (i = Ce(s, l)), !(i in s.apps))
    throw Error(`"${i}" does not exist in the .remix file`);
  let c = await r.getCodes(i), { codes: _, codeBufs: d } = Ue(c), f = await r.getRuntimeJson(i);
  o || (o = f.settings["start-screen"]);
  let R = await r.makeMixcoreConfig(i), u = { codes: _, dbName: i, screenName: o, runtimeJson: f, mixcore: R, codeBufs: d }, E = (N = (O = s.overrides) == null ? void 0 : O[i]) == null ? void 0 : N.constants;
  return E && (u.constants = E), u;
}
function Ce(h, t) {
  const e = Object.keys(h.apps);
  if (e.length === 0)
    throw Error("there are no apps in the .remix file");
  if (e.length === 1)
    return e[0];
  if (t || (t = new URL(remixFileURL).pathname.split("/").pop()), t.endsWith(".remix") && (t = t.substring(0, t.length - 6)), e.indexOf(t) === -1)
    throw Error(
      "there are multiple apps in the .remix file, please specify which one explicitly with the parameter 'db-name'"
    );
  return t;
}
function Fe(h) {
  return new TextDecoder().decode(h);
}
async function at(h) {
  let t = new TextEncoder().encode(h), e = await crypto.subtle.digest("SHA-1", t);
  return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "");
}
function dt(h) {
  if (h.contents) {
    let t = {};
    for (let [e, n] of Object.entries(h.contents))
      t[e] = dt(n);
    return new T(t);
  } else {
    if (h.data)
      return new q(h.data);
    throw "Invalid object";
  }
}
async function xe(h, t, e) {
  let n, a, r = async (f) => {
  }, s = async () => {
  }, i = async () => {
    let f = n.create_entry_for_path($);
    f.data = new Uint8Array(t);
  };
  if (!e || !crypto)
    return console.log("[rmx-mixcore/load] not using persistence"), n = new T({}), await i(), { db: n, manifest: a, setManifest: r, save: s };
  console.log("[rmx-mixcore/load] using persistence with idbKey", e);
  let o = await nt(e), l = `_rmx_cache_${e}`, c = await nt(l), _ = await crypto.subtle.digest("SHA-256", t), d = Array.from(new Uint8Array(_)).map((f) => f.toString(16).padStart(2, "0")).join("");
  return !o || !c || c.remixFileURL !== h ? (console.log("[rmx-mixcore/load] creating new db", e), await De([l, e]), n = new T({}), await i()) : (n = dt(o), c.hash === d ? a = c.manifest : (console.log("[rmx-mixcore/load] upgrading existing db", e), await i())), s = async () => {
    n && (console.log("[rmx-mixcore/load] saving db", e), await it(e, n));
  }, r = async (f) => {
    await it(l, { remixFileURL: h, hash: d, manifest: f }), await s();
  }, { db: n, manifest: a, setManifest: r, save: s };
}
class et {
  constructor(t) {
    this.mixcoreWasm = t;
  }
  static async create(t) {
    let e = await WebAssembly.compileStreaming(fetch(t));
    return new et(e);
  }
  async initRemixFile(t, e, n, a) {
    let { db: r, manifest: s, setManifest: i, save: o } = await xe(
      t,
      e,
      a
    );
    this.db = r, this.save = o;
    let l = G.createWASI(be, { [U]: this.db }, { debug: !1 });
    if (this.wasmApi = await G.create(this.mixcoreWasm, l, "warn"), !s) {
      let c = `/${U}/${$}`;
      s = this.wasmApi.initRemixFile(c, "/" + U, n);
      let _ = this.db.get_entry_for_path($);
      _.data = new Uint8Array([]), await i(s);
    }
    return s;
  }
  async getCodes(t) {
    let n = `${await at(t)}/v2/resources/libraries/executable_cross.WASM`, a = this.db.get_entry_for_path(n);
    return a ? [{ id: Le, buf: a.data, odlibApp: null }] : this.wasmApi.mixcoreGetCodes(U, t);
  }
  async getRuntimeJson(t) {
    let n = `${await at(t)}/v2/runtime.json`, a = this.db.get_entry_for_path(n);
    if (!a)
      throw `'${n}' doesn't exist`;
    return JSON.parse(Fe(a.data));
  }
  async makeMixcoreConfig(t, e) {
    let n = await tt.create(U, t, e, this.wasmApi);
    return n = new Ge(n, this.saveOnWriteFFIs.bind(this)), { kind: "mixcore", mixcore: n };
  }
  async saveOnWriteFFIs(t) {
    Be.includes(t) && await this.save();
  }
}
class Ge {
  constructor(t, e) {
    this.mixcore = t, this.callback = e;
  }
  async ffiNames() {
    return await this.mixcore.ffiNames();
  }
  async ffiDispatch(t, e, n) {
    let a = await this.mixcore.ffiDispatch(t, e, n);
    return await this.callback(e), a;
  }
}
const Be = [
  "$db_delete_a",
  "$db_delete_one",
  "$db_save",
  "$db_save_a",
  "$db_save_one",
  "$db_upsert",
  "$db_upsert_a",
  "$file_create",
  "$file_delete",
  "$file_register",
  "$file_rename",
  "$secrets_set",
  "db_flush"
];
export {
  et as MixcoreWasmIntf,
  Ce as inferDbName,
  Ve as init
};
