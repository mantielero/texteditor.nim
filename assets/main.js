/* Generated by the Nim Compiler v2.0.2 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555173 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555181 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555180 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555177 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555178 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI1023410205 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NNI1023410205 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554435, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}]};
NTI1023410205.node = NNI1023410205;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
var NNI33555178 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555178.node = NNI33555178;
NTI33555180.base = NTI33555177;
NTI33555181.base = NTI33555177;
var NNI33555177 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555180, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555181, name: "up", sons: null}]};
NTI33555177.node = NNI33555177;
var NNI33555173 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555173.node = NNI33555173;
NTI33555177.base = NTI33555173;
NTI33555178.base = NTI33555177;
NTI134217741.base = NTI33555178;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555178;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555178;

function toJSStr(s_33556901) {
  var result_33556902 = null;

    var res_33556943 = newSeq_33556919((s_33556901).length);
    var i_33556944 = 0;
    var j_33556945 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556944 < (s_33556901).length)) break Label2;
          var c_33556946 = s_33556901[i_33556944];
          if ((c_33556946 < 128)) {
          res_33556943[j_33556945] = String.fromCharCode(c_33556946);
          i_33556944 += 1;
          }
          else {
            var helper_33556959 = newSeq_33556919(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556960 = c_33556946.toString(16);
                  if ((((code_33556960) == null ? 0 : (code_33556960).length) == 1)) {
                  helper_33556959.push("%0");;
                  }
                  else {
                  helper_33556959.push("%");;
                  }
                  
                  helper_33556959.push(code_33556960);;
                  i_33556944 += 1;
                  if ((((s_33556901).length <= i_33556944) || (s_33556901[i_33556944] < 128))) {
                  break Label3;
                  }
                  
                  c_33556946 = s_33556901[i_33556944];
                }
            };
++excHandler;
            try {
            res_33556943[j_33556945] = decodeURIComponent(helper_33556959.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556943[j_33556945] = helper_33556959.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556945 += 1;
        }
    };
    if (res_33556943.length < j_33556945) { for (var i = res_33556943.length ; i < j_33556945 ; ++i) res_33556943.push(null); }
               else { res_33556943.length = j_33556945; };
    result_33556902 = res_33556943.join("");

  return result_33556902;

}

function eqStrings(a_33557041, b_33557042) {
        if (a_33557041 == b_33557042) return true;
    if (a_33557041 === null && b_33557042.length == 0) return true;
    if (b_33557042 === null && a_33557041.length == 0) return true;
    if ((!a_33557041) || (!b_33557042)) return false;
    var alen = a_33557041.length;
    if (alen != b_33557042.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_33557041[i] != b_33557042[i]) return false;
    return true;
  

  
}

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557268, src_33557269, ti_33557270) {
  var result_33557279 = null;

    switch (ti_33557270.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557259(ti_33557270))) {
      result_33557279 = src_33557269;
      }
      else {
        result_33557279 = [src_33557269[0], src_33557269[1]];
      }
      
      break;
    case 19:
            if (dest_33557268 === null || dest_33557268 === undefined) {
        dest_33557268 = {};
      }
      else {
        for (var key in dest_33557268) { delete dest_33557268[key]; }
      }
      for (var key in src_33557269) { dest_33557268[key] = src_33557269[key]; }
      result_33557279 = dest_33557268;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557270.base == null))) {
      result_33557279 = nimCopy(dest_33557268, src_33557269, ti_33557270.base);
      }
      else {
      if ((ti_33557270.kind == 17)) {
      result_33557279 = (dest_33557268 === null || dest_33557268 === undefined) ? {m_type: ti_33557270} : dest_33557268;
      }
      else {
        result_33557279 = (dest_33557268 === null || dest_33557268 === undefined) ? {} : dest_33557268;
      }
      }
      nimCopyAux(result_33557279, src_33557269, ti_33557270.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557269)) { 
        if(dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
          dest_33557268 = new src_33557269.constructor(src_33557269);
        } else {
          dest_33557268.set(src_33557269, 0);
        }
        result_33557279 = dest_33557268;
      } else {
        if (src_33557269 === null) {
          result_33557279 = null;
        }
        else {
          if (dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
            dest_33557268 = new Array(src_33557269.length);
          }
          result_33557279 = dest_33557268;
          for (var i = 0; i < src_33557269.length; ++i) {
            result_33557279[i] = nimCopy(result_33557279[i], src_33557269[i], ti_33557270.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557269 === null) {
        result_33557279 = null;
      }
      else {
        if (dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
          dest_33557268 = new Array(src_33557269.length);
        }
        result_33557279 = dest_33557268;
        for (var i = 0; i < src_33557269.length; ++i) {
          result_33557279[i] = nimCopy(result_33557279[i], src_33557269[i], ti_33557270.base);
        }
      }
    
      break;
    case 28:
            if (src_33557269 !== null) {
        result_33557279 = src_33557269.slice(0);
      }
    
      break;
    default: 
      result_33557279 = src_33557269;
      break;
    }

  return result_33557279;

}

function mnewString(len_33557003) {
        var result = new Array(len_33557003);
    for (var i = 0; i < len_33557003; i++) {result[i] = 0;}
    return result;
  

  
}

function raiseException(e_33556653, ename_33556654) {
    e_33556653.name = ename_33556654;
    if ((excHandler == 0)) {
    unhandledException(e_33556653);
    }
    
    throw e_33556653;

  
}

function addInt(a_33557050, b_33557051) {
        var result = a_33557050 + b_33557051;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557324, a_33557325, b_33557326) {
  var result_33557327 = 0;

  BeforeRet: {
    if (((a_33557325 <= i_33557324) && (i_33557324 <= b_33557326))) {
    result_33557327 = i_33557324;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557327;

}

function chckIndx(i_33557319, a_33557320, b_33557321) {
  var result_33557322 = 0;

  BeforeRet: {
    if (((a_33557320 <= i_33557319) && (i_33557319 <= b_33557321))) {
    result_33557322 = i_33557319;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557319, a_33557320, b_33557321);
    }
    
  };

  return result_33557322;

}
var objectID_754974897 = [0];

function newSeq_33556919(len_33556921) {
  var result_33556922 = [];

    result_33556922 = new Array(len_33556921); for (var i = 0 ; i < len_33556921 ; ++i) { result_33556922[i] = null; }
  return result_33556922;

}

function newQuill_1023410199(id_1023410200, theme_1023410201, placeholder_1023410202, debug_1023410203) {
  var result_1023410204 = null;

    var config_1023410205 = {};
    config_1023410205["theme"] = toJSStr(theme_1023410201);
    if (!(eqStrings(placeholder_1023410202, []))) {
    config_1023410205["placeholder"] = toJSStr(placeholder_1023410202);
    }
    
    if (!(eqStrings(debug_1023410203, []))) {
    config_1023410205["debug"] = debug_1023410203;
    }
    
    result_1023410204 = new Quill(toJSStr(id_1023410200), config_1023410205);

  return result_1023410204;

}

function isFatPointer_33557259(ti_33557260) {
  var result_33557261 = false;

  BeforeRet: {
    result_33557261 = !((ConstSet1[ti_33557260.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557261;

}

function nimCopyAux(dest_33557272, src_33557273, n_33557274) {
    switch (n_33557274.kind) {
    case 0:
      break;
    case 1:
            dest_33557272[n_33557274.offset] = nimCopy(dest_33557272[n_33557274.offset], src_33557273[n_33557274.offset], n_33557274.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557274.sons.length; i++) {
      nimCopyAux(dest_33557272, src_33557273, n_33557274.sons[i]);
    }
    
      break;
    case 3:
            dest_33557272[n_33557274.offset] = nimCopy(dest_33557272[n_33557274.offset], src_33557273[n_33557274.offset], n_33557274.typ);
      for (var i = 0; i < n_33557274.sons.length; ++i) {
        nimCopyAux(dest_33557272, src_33557273, n_33557274.sons[i][1]);
      }
    
      break;
    }

  
}

function getSelection_1023410248(api_1023410249, focus_1023410250) {
  var result_1023410253 = {Field0: 0, Field1: 0};

  BeforeRet: {
    var tmp_1023410254 = api_1023410249.getSelection(focus_1023410250);
    var colontmp__553648212 = (tmp_1023410254["index"]);
    var colontmp__553648213 = (tmp_1023410254["length"]);
    result_1023410253 = nimCopy(result_1023410253, {Field0: colontmp__553648212, Field1: colontmp__553648213}, NTI1023410205);
    break BeforeRet;
  };

  return result_1023410253;

}

function add_33556373(x_33556374, x_33556374_Idx, y_33556375) {
          if (x_33556374[x_33556374_Idx] === null) { x_33556374[x_33556374_Idx] = []; }
      var off = x_33556374[x_33556374_Idx].length;
      x_33556374[x_33556374_Idx].length += y_33556375.length;
      for (var i = 0; i < y_33556375.length; ++i) {
        x_33556374[x_33556374_Idx][off+i] = y_33556375.charCodeAt(i);
      }
    

  
}

function unhandledException(e_33556649) {
    var buf_33556650 = [[]];
    if (!(((e_33556649.message).length == 0))) {
    buf_33556650[0].push.apply(buf_33556650[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556650[0].push.apply(buf_33556650[0], e_33556649.message);;
    }
    else {
    buf_33556650[0].push.apply(buf_33556650[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556650[0].push.apply(buf_33556650[0], [32,91]);;
    add_33556373(buf_33556650, 0, e_33556649.name);
    buf_33556650[0].push.apply(buf_33556650[0], [93,10]);;
    var cbuf_33556651 = toJSStr(buf_33556650[0]);
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556651);
  }
  else {
    throw cbuf_33556651;
  }
  

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33557048) {
        if (a_33557048 > 2147483647 || a_33557048 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556812, a_33556813, b_33556814) {
    var Temporary1;

    if ((b_33556814 < a_33556813)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_385875976(i_33556812) || [],[32,110,111,116,32,105,110,32] || [],HEX24_385875976(a_33556813) || [],[32,46,46,32] || [],HEX24_385875976(b_33556814) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_301990090(result_301990092, result_301990092_Idx, x_301990093, start_301990094, n_301990095) {
    var Temporary1;

    var old_301990096 = (result_301990092[result_301990092_Idx]).length;
    if (result_301990092[result_301990092_Idx].length < (Temporary1 = chckRange(addInt(old_301990096, n_301990095), 0, 2147483647), Temporary1)) { for (var i = result_301990092[result_301990092_Idx].length; i < Temporary1; ++i) result_301990092[result_301990092_Idx].push(0); }
         else {result_301990092[result_301990092_Idx].length = Temporary1; };
    Label2: {
      var iHEX60gensym4_301990110 = 0;
      var i_553648218 = 0;
      Label3: {
          Label4: while (true) {
          if (!(i_553648218 < n_301990095)) break Label4;
            iHEX60gensym4_301990110 = i_553648218;
            result_301990092[result_301990092_Idx][chckIndx(addInt(old_301990096, iHEX60gensym4_301990110), 0, (result_301990092[result_301990092_Idx]).length - 1)] = x_301990093.charCodeAt(chckIndx(addInt(start_301990094, iHEX60gensym4_301990110), 0, (x_301990093).length - 1));
            i_553648218 = addInt(i_553648218, 1);
          }
      };
    };

  
}

function addChars_301990086(result_301990088, result_301990088_Idx, x_301990089) {
    addChars_301990090(result_301990088, result_301990088_Idx, x_301990089, 0, ((x_301990089) == null ? 0 : (x_301990089).length));

  
}

function addInt_301990111(result_301990112, result_301990112_Idx, x_301990113) {
    addChars_301990086(result_301990112, result_301990112_Idx, ((x_301990113) + ""));

  
}

function addInt_301990129(result_301990130, result_301990130_Idx, x_301990131) {
    addInt_301990111(result_301990130, result_301990130_Idx, BigInt(x_301990131));

  
}

function HEX24_385875976(x_385875977) {
  var result_385875978 = [[]];

    addInt_301990129(result_385875978, 0, x_385875977);

  return result_385875978[0];

}

function onTextChangeCallback_553648133(delta_553648134, oldDelta_553648135, source_553648136) {
    if ((source_553648136 == "api")) {
    rawEcho([65,80,73]);
    }
    else {
    if ((source_553648136 == "user")) {
    rawEcho([85,83,69,82]);
    var tmpTuple_553648137 = getSelection_1023410248(q_553648132, false);
    var index_553648138 = tmpTuple_553648137["Field0"];
    var length0_553648139 = tmpTuple_553648137["Field1"];
    rawEcho([111,107,49]);
    var line_553648140 = q_553648132.getLine(((index_553648138) | 0))[0];
    var offset_553648141 = q_553648132.getLine(((index_553648138) | 0))[1];
    rawEcho([45,32,76,105,110,101,32,108,101,110,103,116,104,58,32], HEX24_385875976(((line_553648140.length()) | 0)));
    rawEcho([45,32,76,105,110,101,32,111,102,102,115,101,116,58,32], HEX24_385875976(((offset_553648141) | 0)));
    rawEcho([111,107,50]);
    rawEcho(HEX24_385875976(((line_553648140.length()) | 0)));
    rawEcho([101,110,100]);
    }
    }

  
}

function deleteText_1023410239(api_1023410240, index_1023410241, length_1023410242, source_1023410243) {
  var result_1023410244 = null;

    result_1023410244 = api_1023410240.deleteText(((index_1023410241) | 0), ((length_1023410242) | 0), source_1023410243);

  return result_1023410244;

}
var q_553648132 = newQuill_1023410199([35,101,100,105,116,111,114], [98,117,98,98,108,101], [], [105,110,102,111]);
q_553648132.on("text-change", onTextChangeCallback_553648133);
var delta_553648178 = [deleteText_1023410239(q_553648132, 5, 6, "api")];
