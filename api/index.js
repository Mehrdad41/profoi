export const _0x8d9b5e = { runtime: "edge" }; 

const _0x7a3b2f = (process.env["TARGET_DOMAIN"] || "").replace(/\/$/, ""); 

const _0x1f8d3a = new Set([ 
  "host", 
  "connection", 
  "keep-alive", 
  "proxy-authenticate", 
  "proxy-authorization", 
  "te", 
  "trailer", 
  "transfer-encoding", 
  "upgrade", 
  "forwarded", 
  "x-forwarded-host", 
  "x-forwarded-proto", 
  "x-forwarded-port", 
]); 

export default async function _0x59d1f3(_0x426cd1) { 
  if (!_0x7a3b2f) { 
    return new Response("Misconfigured: TARGET_DOMAIN is not set", { status: 500 }); 
  } 

  try { 
    const _0x5977be = _0x426cd1.url.indexOf("/", 8); 
    const _0x2db5d1 = 
      _0x5977be === -1 ? _0x7a3b2f + "/" : _0x7a3b2f + _0x426cd1.url.slice(_0x5977be); 

    const _0x5b4c4b = new Headers(); 
    let _0x41e199 = null; 
    for (const [_0x41d91d, _0x2bc1f9] of _0x426cd1.headers) { 
      if (_0x1f8d3a.has(_0x41d91d)) continue; 
      if (_0x41d91d.startsWith("x-vercel-")) continue; 
      if (_0x41d91d === "x-real-ip") { 
        _0x41e199 = _0x2bc1f9; 
        continue; 
      } 
      if (_0x41d91d === "x-forwarded-for") { 
        if (!_0x41e199) _0x41e199 = _0x2bc1f9; 
        continue; 
      } 
      _0x5b4c4b.set(_0x41d91d, _0x2bc1f9); 
    } 
    if (_0x41e199) _0x5b4c4b.set("x-forwarded-for", _0x41e199); 

    const _0x4f9b58 = _0x426cd1.method; 
    const _0x341dd3 = _0x4f9b58 !== "GET" && _0x4f9b58 !== "HEAD"; 

    return await fetch(_0x2db5d1, { 
      method: _0x4f9b58, 
      headers: _0x5b4c4b, 
      body: _0x341dd3 ? _0x426cd1.body : undefined, 
      duplex: "half", 
      redirect: "manual", 
    }); 
  } catch (_0x107799) { 
    console.error("relay error:", _0x107799); 
    return new Response("Bad Gateway: Tunnel Failed", { status: 502 }); 
  } 
}
