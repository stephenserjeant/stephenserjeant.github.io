// BSD 3-Clause License 
//
//Copyright (c) 2017, Tom Yeadon
//All rights reserved.
//
//Redistribution and use in source and binary forms, with or without
//modification, are permitted provided that the following conditions are met:
//
//* Redistributions of source code must retain the above copyright notice, this
//  list of conditions and the following disclaimer.
//
//* Redistributions in binary form must reproduce the above copyright notice,
//  this list of conditions and the following disclaimer in the documentation
//  and/or other materials provided with the distribution.
//
//* Neither the name of the copyright holder nor the names of its
//  contributors may be used to endorse or promote products derived from
//  this software without specific prior written permission.
//
//THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
//AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
//IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
//DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
//FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
//DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
//SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
//CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
//OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
//OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* https://github.com/tyea/erot13 */

function erot13_main(s)
{
	return (s ? s : this).split('').map(function(_) {
		if (!_.match(/[A-za-z]/)) return _;
		c = Math.floor(_.charCodeAt(0) / 97);
		k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
		return String.fromCharCode(k + ((c == 0) ? 64 : 96));
	}).join('');
}

function erot13_onload(event)
{
	var i = window.document.querySelectorAll('.erot13');
	for (var j = 0; j < i.length; j++) {
		var k = i[j];
		var l = k.dataset.erot13;
		if (l === undefined || l === null) continue;
		var m = erot13_main(l);
        if (k.tagName === "a" || k.tagName === "A") k.href = "mailto:" + m;
		k.innerHTML = m;
	}
}

window.addEventListener('load', erot13_onload);
