'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "Name": "Bitchip",
      "Description": "Combined alcohol and drug rehabilitation",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKXSURBVBgZBcFNiJR1HADg5//Ou767jblWM9qOyWZSXlqCNMpYWbKo3VMEhYJKEn1Rlzx0CSmIIq20o5fCQ3QSskOXCPqEuhQWXkLsg3V3xtVN23LW2Z1531/PkyICAAAAAAAAAOSw//CpY+Ug7buyXA5fWwEAQAUAjBSsG3Hy0/f2HMqhrNL+t17Y3tzQbKaUcoFABZIIIqhAKAernnnzi4M4lMOVa2XRbDTTS8c/1tq8XlGrlFGQjcoSWSLLklqWzP521tuHXtQvU4IcllfIstydW2939wOTallNREnKSUmWkpQyWZYZqmWqCoAcoEJRDBseWUsEAAAACIEAOUCF/mpPv3edlERUqihVVSYhItRSabC6LKICkANEcHmp7e9LS/rVQBWlf1cWrJa3SYANxVXXu0tEBiAHiODiwg2GLvSACKIpogfgqhEXLgQAyKFCBFltDRVl+4zG6h9aG27x+9wlvc0PS8OjivOfmdnS8MnJE26OKKampuo5QARRlRZ//dy9t4Y9Bw/odru2zs356ofv9a2x76nHFUO5TqdjzdDPw1/+te6NHKKqJLTPfmPHlhvt2n3AK4eP+O/iea2xMRMTEzqdeR8ce1+73XHf/Ts9snvK7Ozs8xkkEB7afpfGTevBa6+/o98f2Lt3r8nJSTMzM6anp/UHA08/+zIYHR0tclg3ki1Vg97oHZuafjnzEzj14RFVWTp69Kh6vQ663a6qCh+dOG76sUfNz8/3UkR48tVT7w6qtHPpn4V71l79sb7rwR2ptWmT+nCeFhYWnDt3TlEUxsfHbdy40XJvEJ323Op33379Z4oIANu2bauNjY1N1Ov1061Wq1kURQ3Z4uLic5hvNBqnMbSyslK22+3L3W73if8BE1ob/QNlaFEAAAAASUVORK5CYII=",
      "status": 0,
      "Price": 41
    }, {
      "id": 2,
      "Name": "Flowdesk",
      "Description": "Reopening of recent laparotomy site",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAB/SURBVCjPpVFBDkBADJyKJ3mEk1d4goPPeYDgN2QtidFdFidZ0UnbZDszbbJCvEeCv4TUlVr3EKvCKmYYhau9AMIYh4oLFq8N6lYCIc6h5PzYbLyTVc8p+oaCQWu81mL8eEPzYNEnsWnP5SQA2fnsBkcSw+1AdJfqGN4hv39zB9EXSdykB4lxAAAAAElFTkSuQmCC",
      "status": 1,
      "Price": 13
    }, {
      "id": 3,
      "Name": "Zamit",
      "Description": "Other therapeutic apheresis",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALvSURBVDjLZZJdSFNhGMf/5+zo2pyb5cdyxXRNW2WkhhJGXlReFEZEBV0UVARBIAiCXnojdFE3QUQR3k6iC6GIoK+LMDNBaVpOW04by/yYzuk8O9v57DnHJqteeM57zvue5/c+///zMpqmITv6+vpsqqp2KorSRLGDAhRxiiFZlu+2t7dv4J/BZAF+v7+OkvtdLpfHbreDZVnQN9LpNGKxGGZpEOh8V1dX4D8AJdto87PX660SRRHRaBQ8z+ung+M4OJ1O4+dgMDhNa4e6u7uFLIDTH7R4q7y8vEqSJIRCoRkq9wSt/dIBgiC4EonER4/H46qtFKqqmXBq+vlt8MvvwaTnrhoASmiyWq0Ih8MgyJm2trZITpWRnp6eFmbtbbChuhiWkitweOqRmPVh6nXvnSygVNecTCb199l/jbpc56+3ey7BXtSAeHgS+YyIQvtO2IrdDiYycF0bCvuwuGYxNJ+tGYFJk6ApMjRZJpPWUVTVDMeeU8jMP4GwwmDpWwpSWlxJCxtHOZCJFy8cBwMWjMlC82lAZcidbUjFhpFJBODwtiI99whsvow8WwXM/BhSfH5LY8ebEKefBGiQl5+CM5eAYWwEyMPCHClhVJQdPEfJD8HmyRDXPVgZHEWaX8LhjkmjnaxeJlS6C4qIxMQoEsERLEQmsRrPoKymFeJCL0z5GjLrFYgNfILz5DWoUmrLHwJI0GVoioQi314siSziCQskzY35L/dBVwl8fBeWB4ex3cuAK7BDk8QcAPVe0xSqQMLq1wDGxn/gwLGbMEc/IPRsEIFXcUy9fAfWtAaWU6laFXrOXwBotEgSiqor8X1mEeLEC3hqm1FQQN0Zn4LviJtOL6auiIbcXABnlENUVdY9mMBEaB73Hj9A475KWEvNaNrvIx9+QuKTKHRT+STKkJ0L0CWYd9+ApcIEf4vZaCHZTmCSJgpQhCQpzFChyqZfuvFbADGDmf5Ooyx9Q6dvhrw10w3bvFiKsvmug/6M39LTvtXHnYlaAAAAAElFTkSuQmCC",
      "status": 1,
      "Price": 23
    }, {
      "id": 4,
      "Name": "Keylex",
      "Description": "Therapeutic plateletpheresis",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKKSURBVDjLpZNdSBRRGIbnzOzubSxBRReBYhTRDziQQlKxbmoKItp0YVRUsBB2UVQsWdkfilHaj6GuZqEkhJaSf6knISqUYIgooogWS2uRwjFd25yZ3Xn7NlKS3bzp4jDMzHne73zPfCMAEP5nzbux6gU5UifwsE+AWSMos89DVczz4xpD8ArjkxUsMW4AwZ7InSWwetJh8Vzo1YzPviNYjfTmQL8rY+KSqI1fFJWYAKrsjjSvgPV4F/DsAGbqFyF0nSVOX2Xu0M3lwKMdCHdlgGDtW5kox23BqGFes2UdBeyD2ZYKgn1Tlcynt6YAPB/TDUkg2PNPB9H1s4pxozWZTlIIgjX9XipVL0CoaW0U9sVINGsF2ahm8l/9OkmWZg3shNWXC/TnwnzgwtdSUR27IDpn942cluSPxZIsRGXpt5eCTINg7Y9pNdy1DejbDjzMhNm+BQSrgXMS/1wi+UdOSQiUOeH32rgwc4PxSH8eMFSECC+A2Z0Ns5PAgXygNxPoTqdrFoz2dMy0bKLTuCk0B6HmjXh3hALINCdZCFYyTFaIKn0mTqa50baZNmZQgAvG/TSMlkjqp5MSHz4h+T8ct+HtYRteFdl5jMTxctFJsjSrLw/hDtfvEL01DQSrBDsXnMToIphPN66H0ZGJL2ckf7ApGejJglazCu+P2XwLBpDp8smG1dS/gonalSDTHjLtm7q1AehyIXA5AS8P2r1xAwhWvtcm0Bjn08Rlg0xrBDvJtHukdBnQuRU6SXxzdDGG9jpiJ3HsvKgEzkpasDEZE3VrMFwszVV6fciuTjWmYLQ8CYN7HNrTQocStwUynUiyWkgWJ9Nzf90Lj115vt/BB3c7vE8KHfNE/gKM7aCNx0eNYwAAAABJRU5ErkJggg==",
      "status": 1,
      "Price": 78
    }, {
      "id": 5,
      "Name": "Sonsing",
      "Description": "Other operations on esophagus",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFESURBVBgZBcG9S9RxAAfg565DI51uCBocpGhoqM1VaAjByXAImvoXDtr6D4JAaG2oyXtpKJGEltYcGntDErEhEI3kvDP7fb+fnqcVAAAAQAeg39XLqsVcyl62bTw8AkTE5tqb8WHOU1MzzUFej1+uR4SIzeWPOcu/TPI7JznNecZ5ngcrEa3YnJ/7fHehY6Kqqiq+eedgP7cH4zZ6dxZmnamKoiqGnpjTXcxj2tSVq/4qGkXRGOlrfDcvK7TJ0qypoiiKob5G9cWsukSHoCiqamQgiiqKoE12p2YUxVBf0aiK6ybs0qbu/HJZMTRQFEWjuOFU3aFNnn06vLCnr1EURbHq1PF+ntIKXiz/+fDTFV/90HHNTWdOTO69fU8rYH0tr7rzc2YUF8aOx3m0NYJWAPe76VmttzK1bzsbW0dAKwAAAID/tYu/URIDsoEAAAAASUVORK5CYII=",
      "status": 1,
      "Price": 71
    }, {
      "id": 6,
      "Name": "Aerified",
      "Description": "Lysis of adhesions of spinal cord and nerve roots",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJASURBVDjLhZLNa9NwGMe/WRKXpp19L6WrdVsZHgq9aBF2cFDRDi8WxJPssqMXDx4H+xuGFDz1YC+eBvUgnWDc0FqoL+CmHlylthurdWqG7bY0zUvtL5CSxYOBh+f5/fJ8P89LQg0GA9ifu68XMzOB8INJ/kL8WKGwf/y5WW817z/KrBXtuZQdMBRfuz5z+emcb4E97LvwtXsG3aMOfiiP1Y0Pwu3ineenIGN24nm//+GsN8U2dQ3bf4BnByJe0luIhsKM1+Fatecz9ovZs9NT7+QaPFoKG3sStOgOPrFPQP92YtoTif4XoOkyTmTgTUvHN5EBdxKFo7sEyr2Jnlr7Z1+jEarVqlCpVAa7P0U6pEg4kmqgxjgcfPdAP9xDnAPqu7/oQqEwyOfzwinAUDzvcDjSyWQSVzxZ7Oy/RSZE45JXw9w5BTeTW/jSfo+l1D1ks1kEAoF0LpdLj0ZQVXXF5/Oh3W4jPD6Ji+O3UNxeg6q9AsP28bHVwo2pRfBdHo1GA/F4HPV6fXkofUGVy+V5nuc3Y7EYOp0O+v3+yIZgkM9MURRomgbLspiYmIDT6YQgCAR2lVEUZSUYDGLojSSO4wwz/w/irbGu6+j1ekgkEqjVassMqSJJEkRRhCzLoyRN0wxvns07cmYYBm632+iQANKkMmnZTLAL7GfiXS4X6TpNRjBIxMyq1sp2iPnO1DGm0BTbIfZRzJ2Q2AAQkt/vH1WyJpjLI7F1ocQikcgIsF4qlRbMlqwjWWPrmJau1/8CtF7RM3ksOU0AAAAASUVORK5CYII=",
      "status": 0,
      "Price": 89
    }, {
      "id": 7,
      "Name": "Voltsillam",
      "Description": "Trephination of sclera with iridectomy",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJpSURBVDjLdZLLaxNRFIe/O2kTqxmNxAopUjXWB7pwrUIXggs3oispCoqCFWG0G6H9D6Su3IjrQEAExYULF+LKlagUNL5qs4i0jRhokj6mM/dxXIyPIdgDh3s43Pvx+517lIiQjmq1etJaeyuKomPAFmPMC2PMvSAIXvKfUGlApVK57vv+/aGhIeV5HgArKyvMzc1Jq9W6MTk5+aAX0Jd6fCifz0+XSiXVaDRoNpsA+L5PqVRSYRhOl8vln/V6/XEa4P0put3uq2Kx6M/Pz9NsNi8GQaCCIFCLi4uXZmdnKRQK+bGxsTu9CrxUnTPGsLCwsBQEQfVPc2pqqgK0Op2OGhwczG9oAchYaxER23tpYmJikA1CiQiNV1fk2cxRjFNYazlz5A0Z0Yg1iElSa/vUddtPgfMKOe2J4eC1dypRIML45WMoPFRmAMVpcAr6NgECVvOxevEscBZg5Nwdvj28+c+CWAMIpvWIvtwOlMqD64eBAoiDtQ4jJ0aJw3mcWQPnkDhKAYwBJ2Bj2rW3eN4WCoeP8/35XcTtZHj0FO3PNeJwCX/PdkQsouM0QIMIYjWFgwfwsjtAOWxked8aYJiYwr69rK/mELMG4v4CPADRGhELVrP0YYZ27TV4BrfuiMIIJKb95RPtr43ErnOI1ikFWidUG1PYv4fM5iJ4MeUL45S1ge4Ptu0bItvtTxQ46QXE4BzOxLRrNTKbfdiUh74sOAPdNuHST/TqMv7wVgSX2E4DRCy5XVcZ2J1BZXPJF3r94CzEIX64jNUR4mwyL2NSgDii/uR2MgtjEKN/p/l7Ym2yWNYmtUsW9hfAtnFXLnJPWAAAAABJRU5ErkJggg==",
      "status": 0,
      "Price": 52
    }, {
      "id": 8,
      "Name": "Aerified",
      "Description": "Removal of intraocular foreign body from anterior segment of eye without use of magnet",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHqSURBVDjL3VJBaJJhGDZ+F7Sduo0gYoeEDkJ6iV00t/Yf1H+il99TMPrFUjuY1XQKpeAOggMV9DQPnUTQTg0Xc6B5GSM7WXj4N6QIKdKgNd0yn753B1m3H7r1wQMvz/s8z/fA96kAqP4Fqv8owGAwzHg8nifxeLyXz+cRiUQ6Pp/vFsMsm2XiaEca0v4VoNfrL1qt1kQqlUK324Usy6jVaohGowfhcLjebreHxDUaDZCGtOSZBOh0uuVAIPC91Wr1nE7nlsViGblcLqTTaYRCIdBMHO0KhUKHtOQ53yARi8UGmUzGbbPZpo1G449qtYpms4l6vY5SqQTiaEca0pJnEqDVah+43e5+Npt97HA4tk0m0ynP87Db7WegmTjakYa05JkE3GBHEIQPyWSyXywWv5XLZeRyOfj9fgSDwbO5su7Brnjt987CFF7y06cvTJc2JgEajYZjFW+azeZDSZKOvF7vgOFEFMW7DIvZFX74LjCPwaskxu8r+Fl4hH2vdvR6Uf1Q0Vtv3+HkY2ZGWgBWLwPrc/iauA3GHygK2FlQj8dvyzh/+s9mQbyyBkvcx6PNewAzDZ+q0GPo3OfA+E+KAt6IV57vSdd/fV6dw5fQFGTpAqqCelRZ4tYU//mGeDXIbjyk2tSIzMT/ASTzlHJFEjXFAAAAAElFTkSuQmCC",
      "status": 0,
      "Price": 54
    }, {
      "id": 9,
      "Name": "Viva",
      "Description": "Suture of laceration of kidney",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALqSURBVDjLjVPbS9NRHN9T/0BWFBQUVIQKXigCpVIyygcDJUrnZdNEc5hlmZc0TdSF0bxszs3LvM3pXE6Xa3NL0TJTl7pcTY1Ec5rX/WxqCrHhp7NBPaRGD5+Xw/lczud8vzQAtJ0wWhLp+4kbUThSFGrQFwTrB59dE+ryA/3+vreNOMaPOmLkMeUT4mTMaoph1klh7pPApOLAUH4LPTn+X7qzLwXsKDDGj0wy8hibM+oCrI9pYTWGA0ZnWEd8sWZQYvXDC5g0XAzyo6BJP5f/R2C89OYeErlquiUPP9vogNgF1iYfbH10B0zxRMQFC4oszMsz8F3XBOqdBKqUs7a2B6fdHAIkMnu6le1w3WrwBLrjHSKWrhhYh72w2kVHjTIIae3eKFJexkp/I0YlKWhJdKsgZIanoTjMtlHPxSY9BD/YgbA2eGPteRjmWzOJazrmZKl4rL4AQT8TD4nIfPMjzKgKIUtwNtJIyxXftISclICN3GxYfHyw3FEEy1ALLIPNsOhkWGzLw5umCHCUflBLr2O29i4WXgnQwDpB0YY5NyapASmoxlxQrGAsFrAIWQ6D6Da0GecxXBaLFfLmuHI+TgrkCBCIYKqIwVKHEHWxxzZp758GbTrc9AqYu4WYb8kkRcnsLcPejzL5DKi3dfAQSEFX9RKRZkzxQklKIaqjD4PW9+QqVy+IxmdpOkwvOaB6xVjpa8QQOSMtY4DHAPW6GuLSVFwprUJxSQYWlRyMS9JQGXlw3PELZDB8OzN9c0hkdXua1/pYfTKonloHkeoWYVachCkuHZNFwZhrTMeCmov2rIsoY+wL2TaJJLKr4r6HzUyIpso4R9yp4mB8LWFgScPHtJyNjhx/CCOcCnccZTua77jKRkiJy51lmKlJxJK2lJBLoOMxiet+myDcKWXXXbBDGn/KTcI6brO7TUgzMcBl4Pk9d3tkhSB8r+s/l+k36mKOJpKW10VRh/TlzAOFJLLnTvd2Ffhf/AKfTM1hskDhXAAAAABJRU5ErkJggg==",
      "status": 0,
      "Price": 64
    }, {
      "id": 10,
      "Name": "Overhold",
      "Description": "Radical excision of other lymph nodes",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKNSURBVBgZBcFfSNx1AADwz/f7u7uZntNKPVtlixIytmlbkrVg/UEqiGrQS7SXCOqlmlRQD5HFXuptDILwZRQ9Vtb6yxb9cdZLachcEW0SUm5T2dL0dne/u/v1+YTq0zoLfcbljAGIiACIAIA6lhyuLXozV+gzrv/eMaU9JHlijhCIgRCJgRiQEBCQNVj6eazw5TE5OWNKe6gm9A6TYPk3VmeJkSQikiBEsoxiFz276Tk2lgNJntjCbfsB+0k3+fMEZ76gsYFAliFw6TwtV9MkaiLkKJ/j1CQL02yukG/j1sd46AjbRgCBNKWSUq9RIyciBsrnmP+AGMhFuoYYOkBHH3ccZHaCMyeo1qlVSRtUiCIieod5/H3uO8TNj7K+wLevsDgF7H6G0hDVKpU6aZ0aURMSAvJtdA8w+CQPHqHzRmbe5a/vgTsPkm2hkpI2qBBFBFyc46sXmJlgc4V8K3e/RvFapg6zcZ5CkR0PU6mTNqkRsrdl9h1icZ4EIZBvY+cBbriHjQt8/JzjuZJvNsrWNi9Ky2tG29o9Mf2ZnCYEkoyRl8kXWfyB2aN0DVAs+TwpmS2U7dt7u+uu6vfd6U98On/SSutWEcSM7h1sG6Z7gOv3sv4vpybB5NJZQ7cMasSGwWtGNUJqZOddPmxvFYHA5RXSMrBylmqVf/4Ay2sX5EPRIwPPg5fun3BTzy61EOTUkNXR4OsXyXewOEe1zsKvvPes/9ZXnV76ydzStFdHj3rr+FNaki0KWSZ5o1+n3itGXNlPoUjM2NpDR4nOEjGqpKmp1d9tL223Wv7b2uayH+dO2rW0NhOqD+gs9BrXa0wTdVRQQw0V1Hmnrd1H7W3KMWhtZkYuV395fe7S6P8L1PAuhFtHgAAAAABJRU5ErkJggg==",
      "status": 1,
      "Price": 94
    }, {
      "id": 11,
      "Name": "Daltfresh",
      "Description": "Division of joint capsule, ligament, or cartilage, other specified sites",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH/SURBVBgZBcE/jN9zHAfg5/35fn6/6/XqVEmkISHif2KQRsQgLEg4g4TJYrExYTXabJIbDZJOFoNRQssgERNiYJFeOE21QfTuft/v5+V5Konn3r/0xvbu1uutXMApFCikyDCP8euNa/mi/r7+3uX9vROASuLFD765/MnbFx5prc6GSQBIIK7+u3Hxuxv++O34v59++Pnc1/t7x9ChTfXQuk9nf/zT1KooMlgyzHPc3CyefeAWTz7YfTuuns54+Pozb31+21cfvXTcoKrOJJnWU7Nq9GJqTEUVTWE4v7u298R5996/td13dz6GBqGgoRWtSqvSqrQqbSq//3XTPWc2Hj1X3nzqdtNqeg06QEKfKCVVxhJa6RPrNL9ci5MxG+PE0/dtqd5m6JAQ9GoigmqlkEGmxpo2yhiTaFQDHYKBKkoJggxWE6CaWkpaDCRAhzGTMFBIAlrDKH0KKUKUZbAMoMMYkYQQASBAKRV6Y+DUimUO6LAMlpDBABAwwjIIRkixmpr5ZAYdxhwjsf/lywAAAADgsVc/szkeoMM8L5YFuPuuOwEAAMCVg0MZsTmaQYf5eIx5jKCuHBwCAAAA6L2NeRkzdNgcLYc76+mOd174dCdJEwbg1u0OErZXTZWxmuqfZR4H0KEqHz7/7qVXqurxyGkAIYgAAUdjjO97cxH+Bxjp+96ObDbVAAAAAElFTkSuQmCC",
      "status": 1,
      "Price": 17
    }, {
      "id": 12,
      "Name": "Stringtough",
      "Description": "Correction of fetal defect",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKfSURBVDjLfVNNaBNREP52s0m0cc2PUaiWQLGKYtWKCkUPohJJFfTiIQcv2tKDCB56sAfPUjyUFKQHrS2e1NaCthapSFuxlFyMifYHRWkvDZHapj/aZLubXWfeJgV/X5g3u5uZ7/tm5j3Jsiz8byUSiS7DMC7puq6QB3lha2tr7B9J/wJIpVJeSujw+XwX3e4yaJQE04SIphy/34fBwRdQ/pacTCYjnBwMBnd4PB5Mz8yC2U3TgmmZBGShQGCapkGZmprSCoWCi0wElWSyz2azv0vGwkKWgEyEz9SJbwonV1SEsLi4JNgt/lms0hLGL8SJgN+L/r5n2Fd9SLDzf0IBo3LyjY4EhUmQJNrtTXi2leVl3G48KhjfJeJgteXnLtgKWCqzcqA/sAWyLEMik4vGzwxgmTZj9YEj4tkq9kBmBfROADIcDscvJhc9L24eM86p0+hcjImyhAK9OB5JluBQlHV24bkE8vbkbMbOj/fwY8UQKgQAb9wQLoEZK7eVifrtJSG9ZNgHauYN5ryTqJoPIpfPYWi8V0xFAMjFOtm+fPrzXGz2TmAmN4vwyeOoCOzC8MRTxMe7kdcCNoDTqaClvkaMR9cNrK5qQrLL5aQyLLQPP0DNnggKcgEHy8N4NdmD2v3H0P35ORSqq3VkZOhE6aCQD6iqWsnTyWQyGqlzf8t9hVPahLq99UJR0+m76P/QTo3sgxKNRptKUtva2q4TyPmdVbsrVdWH3icPTZr5/ez3+SsT6TEplR5Fc7gLLS8vY4PDTR2SLbmUHIvFthJbLBI5eyoUCkFVPWhoaNyYz+ejhqXfir8fg4uuDjO7JAWjydd0eszW9ctE0hfI3vb0PD5cOv/FezEZv5O+WXttu9I9PXAVGFApfIWsnb43/wTyL6VPiDb06AAAAABJRU5ErkJggg==",
      "status": 0,
      "Price": 15
    }, {
      "id": 13,
      "Name": "Subin",
      "Description": "Opening of cranial suture",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJWSURBVDjLpZLva1JRGMf9F4JgEEGjIG5vetGoSz8hmGVN023qbTklTdmyHxaN2OLuF5nDsSYWNZyLHM0fZOVetGx4dXNuU0GvL6INKioKutWtKDZaRLenc+AWxbUY9OIDh8Pz/T7f5zlHBgCy/+HXgQ01kmzYFGPDZr4UsQpsyCIUho18boiKzV6tJ/9pwIaNtlLEzLEhE1sYPkTnr1FEzq8ncoM6OjtIsdkBipvyamxlDXBnLC6OGFylFwsbEFqEA3EcoUKszXg1roy3nku5lZIksmLIFCsGTSwqJBBHEW2Is4gWxGmEAVGZ7lezSbcyVibBYb4QaKBRUR2iVRSfEcU4hR1RnXTV0Cm3ipcYlMIWIT9E4e7Hfuv6cwScqAmnSHQriFSvWpCOEDQLWZ+OEAux8KRo1izeWRHU/Q45kXQppQb56wY+O6DFIyhEof17awt8c5yAr0cssKTVw6JcAZ82b4MP6zeCxGDWp0fvrMNLrEToETYs/pKbgKXJOHy+dwcWoyOwEPDDu1XrpAaZS7Xk9BUdl/ao8TOuQewu1xmL365YDaOOHQ2SjzTZd8A25dFwqV4Vyzj30eOde4h4u5yIn6um0311wtzdNnhZ8MHT6YvAnFfDreatFZKvzFzYTyJijEvJ42Uxzhoh3rH3Y6JbCY8neuD1wxvwZj4IjxJdELXuFCKWLRV/GPyN0VO7jOn+g/BsxgPcgwA8z16GvN8MPQriybIMMLft242Msxbmx9phbqwTMl49RJvI98s2wNy0kcZgYxWMdynQCOSroGnTSnz/A5Fyv6NS2MnjAAAAAElFTkSuQmCC",
      "status": 1,
      "Price": 41
    }, {
      "id": 14,
      "Name": "Ronstring",
      "Description": "Synovectomy, wrist",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMOSURBVDjLVZNNaBxlAIafb+ab2Z3N7Oxv/nYTEyv2LzQJpKBgrQqNUKmY4kUIXqUHT70p9iB48CKIiN5E0It6KFiwiv9FpAVpKUggNc3mZ7vpJpv9n93ZnZ35PNRI+8B7e9/n9gqlFAeIVUfPeN3zh0R0eVpYM1OanhvTCEY0f3tU79+ctnpfHM73fuQhxIHAWHnmkOGXPjgZyS09l5hnNv4YOdMhoQmigzqGt4nhfeub1fpnVsl/e+hMv/q/QKy+Me0EO5dfso/OvzB8grgV4HGXJC7jwAQ2oxxDuC36xZ+Rhe+v6iutZf2iqklReNe0tPSHZ2Nz84ujR7ht3iJKjcexiOIQI8SiixxcR7QtRORFlK7O9t0rlyy4KBEj5+YisVeez85wy9zGIUeGDDYhDhYOITYuoh2BvTJ68y7B0GnCym8XGq+KL2U0MrE8Z2SRVhqdPmlCsvgk8RlCkgAivRbUNKj1YPMeeu4wcnjRql7/+jVpyvxsPjbK3whi5LEAB0WWgBRgqwAaFah04X4V7puwdwddz+FXjJMSbXI8aSTYCgU2oKMwEdgCEoDhug/G5SjsmFDUoV+DXJ7BnpiUVCNBaJqEXfDVfwG6CjoKnF4crZGCVvNBug0IPXzPZOCnAunfk8W6ro7H2gK3A02gGoDeA1MDGx2nkYG6C24bvDaMSzq7ZfxBsiC7O+aNDaWOn0oLfl0HMwDlQRCAHYUkEGvFkLsp2G9Bo0n41AiNG6sMBvY1yZr6/JsV//XZZ3WZaEp2t6DvgWFA1QRHQbwjSDeTUGvCiSPU1ovU/typQPIrTV0yrrl3vE+/+8XlaCIgq8H+BtSLUN2C2ibsl8ArR+HYGE0rwvbvRTr96HsL6od1CUDDf+enK92JwT+982cWEswvRmiug6qAr0E4AV4uoFXosnV1g8bN5kcp7E8eOZOYKtmUqm/ZiDdfPhV3Zp6IM5k0SIUBstwmXKvCX5UdM6y9n2b34wV1IXxEcEBU3J4dprU0zODpjFBTIyoIxgjXxlB/PIl1eUmdLjzc/xceOVXddrB6BQAAAABJRU5ErkJggg==",
      "status": 0,
      "Price": 41
    }, {
      "id": 15,
      "Name": "Konklab",
      "Description": "Excision of perianal skin tags",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHsSURBVDjLtZPpTlpRFIV5Dt7AOESr1kYNThGnSomIihPoNVi5Qp3RgBgvEERpRW1BRBAcMEDUtIkdjKk4otK0Jdr2vgxZ3kA0MYoaG3+cX2evb529zt4sAKz/OawnASgCBNm5LaE7vjVDutkA4mMdLV4TkvcCuvba2Iqd1pDhWA33mQU+2oXVv07YfpoxuNWFuqVXoeqFCnZcgJwRm04p+Gk3Fs9t8PyZx/K5Hfbf03CGLRj62g2+rSR0K0D+vZXUB1Xw/ou5usJWjAaU0Gz3w/rjHey/ZjDLvKTD34KSyXzyBkC2JaYd4feMqyNa3OQTREQePlXjrqSq5ssj5hMjTMd66ALDKDLm0jcA0s+NID6JIFmvQaNXANEKX3l5x7NyqTcb7Zg8GYtCOLoXuPcbha6XV0VlU4WUzE9gPKjF2CGFbE3G3QAmafDnShETF3iKTZyIblcNza4Syi/deD6USscFCJwV6Fwn8NonQak5Hy1L9TAcjkJ/oAG1p0a1hYdnfcnkrQCBoxyyNYLp1YCJoB7GIwqGgxGod/oZsQoNDiHSepNCceeAN8uF1CvGxJE25rofc+3blKPqQ2VUnKxIYN85yty3eWh216LeKUTOSCayVGlIH0g5S+1JJB+8Cxxt1rWkH7WNTNIPAlwA9Gm7OcXUHxUAAAAASUVORK5CYII=",
      "status": 0,
      "Price": 33
    }, {
      "id": 16,
      "Name": "Bigtax",
      "Description": "Other partial thyroidectomy",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADzSURBVDjLY/z//z8DJYCJgUJAsQEsMEZ5efn/f//+Mfz58weOf//+Dce/fv2C0yC8d+9eRpA+RkrDAO6Czi3vrpT7COnA+LGxsdeRbUTHZ86c0UQx4MfvvwyZi55cvXX7a8jeZvXrQEWKuDSDMAyAvdCy+cV/EW42hk/ffzOcvvP1zMNbX+JOTdW7TowX4GGQs/jFlVfvvzPdvfop+OxM/euenp5XYLb9/PkTbjPMWw8fPtRB8cK3n/8YVuUpasG99OOHCrqzkWMDwwUUx4K3t/d/fIGGnCZA+PPnz1ROB7a2tv+xBRayrR8+fGDEGQsDlpkACSYJhTJIjokAAAAASUVORK5CYII=",
      "status": 0,
      "Price": 46
    }, {
      "id": 17,
      "Name": "Regrant",
      "Description": "Interruption of the vena cava",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAILSURBVDjLjZPNS5RRFIef+753ypJEs4UJftOmImosSGgREn0tBBdRLV2EGLooCIoWbSL8C2rdQmwXGBUzQmkx4LIPaJLSQiYtRkyz0Xln7j2nhShKOnjgcrgHznN/93ygqmznzLS16WbxgG3as66uTeNGVdcu6XRavfc451j1zjmy2SypVIra2lpaWlro6Ogwqzl2Pa1YLNLc3AzAerCq0t7ejqqSSCQ2KNgAcM4B8Hp85WdewQuICt7D+YOOKIq2BhQKBVSVeM3vTQsJldsDjGWqEBWcrChwHkSUzqOOfD5fGgBwYv/sFu2sKq0giiJUldHve/GqOAHxK7VQUS4fL5ZWsODnUVVO1WX/ez33ZpDxJ4OcnPpKcvTeFPDwbNL1rwFujfU07qgs44JeREQYGBggCAKMMTTMvudIbIb4pWvsbDrE8odk3ae3w/eHz8Rya5MoIk1BLCS98BFVxVpLPB6ntbWVyokRDpzupGxiBPP4Krsnn9LYUB2q0RsBwM1UdwXevKqO7WM48xIRwVqLtZYgCNiVm6espgn6hqB/Du5MYnOfCcU0WgDvfI93ol/+jpvyQgWJzAskJoRhiDGG5fI9LL17TvnQdaLlnywBi39CfMi0UVV6e3u11CIdXkpzLMxQX13EBhkWs45vvywuL3c3LFMpS12pv52bm+4OvWnwof5QeHQu6R78A6o+ZiAxKKNtAAAAAElFTkSuQmCC",
      "status": 1,
      "Price": 59
    }, {
      "id": 18,
      "Name": "Keylex",
      "Description": "Other and unspecified coronary arteriography",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEZSURBVCjPY/jPgB9iEVoqPefllFPdNk2GWBUsVpz9ctL1rkcNW/v+59VhKFgkPfP+xI0dF+uC/jPkWCR/Q1MwX2TGvf7Nretr/UG8BO2I5ygK5olP/dCzpWV+dVAhd+bB+JawrT7ICubIT3nbvaFpVkVqgVDa0diO4CneN91E4Qpmq0560jW/YXp5XB5nyq2YrqCFno9cJeG+mKk48UHHjLruMu8czuSbkfUBizxeucrDw2GGev/71uW1jMVrsq4nPIto8F/g8caFDymgetxbHlVLgDjxnWExPjPdb7sIoYRkk17FywJRECdY1Xux201nMbSgLufO25qyJUY1yNrzsus9JxkscZHMG+kVcN7jqWueowARkUWiAgBEUvolGfpITwAAAABJRU5ErkJggg==",
      "status": 1,
      "Price": 5
    }, {
      "id": 19,
      "Name": "Lotstring",
      "Description": "Lamellar keratoplasty with autograft",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJpSURBVDjLfVLPTxNREP52C+mvbSKE2FYkkIiJioo9KMT0QKImnAwHPXjk1IPoxUsPaoiaSDw0MTEe/Cs4mWhVLGCDlWgwFCMJiYeCSGstu9ttt/vLeS9dLBCc5MvMezvzzcz3VnAcB8ys2xMOTp2GmU7DMU04lgXbMGA3ffvoKJw37xF8+0pAi7W5QWuR01Jos3vXNwzstX8EhslJbF3nyZyI+WbcdgCBuENAHx0qRm8vLEZCYN6q1yH098PWapTT+M8EDeNBvV6/X752HWpIQt3jgcFGVxT4Sr8RnplFiHIOJFi7d7fgaJra2d0t+ehs2zZcgYkYnz0eVbs8Urixh0BgSSsrK0OmaU6Hw+GIQh1rtRonYBBFEV6vlyOTyWzquj6WSCQ+7tKARk12dXVFZFmGpmmw6AUYGAFbQ1VVfh+LxSI0TXKfiJQUZ5OwziZTvdmdwSWrVqsIBoOgCeL7Vshms1ZPT49YLBZ5EVo0cM/5nzl8L36BrFWgaNtKRS0/efl46REXsUHP4ya3ejdeWs+iJH7DSPwCjnYex0x+OrSwPPdweOLIIb4CjVXe+aWbu7vjM//pxzucOzEIS7QwGL0CSzAwfOYiS7/pEsyz/ZnSbtdWlORfaBckXD15ize5c+kFjh0+y0Kf2HznqcXFxU2fz4dAILBLA0EQIKsV5DeymEqP829Tr8extvWVl3omJycxMDCwnsvl5NXV1fPRaFTq6OiAJElcdb/fj4r8h3SYRV+4DyWtgO3qFj4szUGu6E8Fd3dmqVRqiNZJkqhxQicTl564TJhfRlrRBXWM0kIEhfB84dlG8i8v6tBqmkd4owAAAABJRU5ErkJggg==",
      "status": 1,
      "Price": 35
    }, {
      "id": 20,
      "Name": "Fixflex",
      "Description": "Implantation or replacement of carotid sinus stimulation device, total system",
      "Imagepath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAL6SURBVDjLpVNLaFNBFD3zvtHUpEnaJIhNm6aaVhtKqtWFqBDUgJ+CC11ZqyCKq7oQshdEEReiFCnaVTdFcSF2I8Uv9QPWD2lKmqpVqW1f09CXNP+X5D3nRVdVVw7cGWa4595z7p1LNE3D/yxO3wYGBi4VCoVAqVRaU6lUSLFY5PP5vKCfqqoSURQVq9U6EgqFzuv+PT09W+nxdWhoaJn09/ebWZZN+v1+6GwooGrRD6M4cXgjlJlB3HjSCpOjDdPTn3plWb5JwSZqOvUdrMfjibS3t1sdDgdmZ2chSRISiQTWu1rx7N0SYulOdGzdBUIIFhYWjjAMIxoMBnAcR1ZWVnZzNGuLyWRCJBKB3W6Hz+cDlQIqBfX19YhGoxgbG4PNZkMgEMDi4iKSyWTVJxaLeTndMR6Po66uDiWjC9ce55EtE6iUn0h47NnQDGs6TelPw+uUsdMQBtviQzbxHAlXHoyuN5vNoqGhAQ8nFBQ1BgaemsCgwvB4/sMIXd6GmijazCk4fcfREjiJxq4z2O+tBacHoNWuWqYiUCALjqEVoiUidFM0ATWVcfQc7YLZ0oXlL1EIRME6kxN1DheqEhRFAW0bJS1QoEqNAaFBGBqkVXyPbZtZ1DYHUVwYhrCW4PvHKWSyJVy8/+WXBD07rSgETUFZpfpVjRZRg5sbx1n/JGo9B1GYvw3Cy+Br1kGRZ/BgioOUVH4F0LOHw2H4zRLYcg5F+ubMPUXv5gmYW7pRmLsFhi9BWWnC3JO3uP5Ug5Rhqv+F07OnUqlqe2yyjB1uN8RcBJ2beNi3dEOR7oAVNBRSjZBevMXdWS9Qm0Uul6sGIMFgsI/29TK9iBaLhTTVyKTv9D6UiR0260tY7AIFN2Bm9DVC95fVxbRanYHfM/SIrB6me1f3akfPDSI2fAHz315BdHWgHF+atwhs0Bd6E1k9TMzqh9hnqaxMjsDdsQtGoxdz4xOZQl458Dewvv5gcGy3Nd/Z7OC2t7mh8cVX+fjSqUNXwjP/GuefEpx5owIvdjoAAAAASUVORK5CYII=",
      "status": 0,
      "Price": 60
    }];
    
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    
    return queryInterface.bulkInsert('Products', data);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
