var res3 = document.getElementById("res3")
var vagas = []
var nomes = []
var entradas = []
var saidas = []
var cpfs = []
var nasc = []
var estadia = []
var valor = []
var res = document.getElementById("res")
var data
var quartos = []
var conta = []
var nquart
var prod = []
var soma = []
var tot = []
var pag = []
var pagdesp = []
var valorhotel
var faltpag = []
var teste = [];
var pagou = [];


function reservar() {
  var pagamento = document.getElementsByName('pago')
  var nome = document.getElementById("nome").value
  var entre = document.getElementById("entre").value
  var saida = document.getElementById("saida").value
  var cpf = document.getElementById("cpf").value
  var datanasc = document.getElementById("nasc").value
  var quart = document.getElementById("quart")
  num1 = new Date(entre)
  num2 = new Date(saida)

  var difere = Math.abs(num1 - num2)
  var horasdia = 1000 * 60 * 60 * 24 //milesegundos * segundos * minutos * horas = 1 dia
  data = difere / horasdia
  nquart = quart.options[quart.selectedIndex].value
  if (pagamento[0].checked) {
    pagdesp[nquart] = " "
    pagou[nquart] = data * 25
  } else if (pagamento[1].checked) {
    pagdesp[nquart] = 'Hospedagem --> R$: ' + data * 25 + '<br>';
    pag[nquart] = 0
    pagou[nquart] = 0
  }
  if (quartos[nquart] == nquart) {
    window.alert("Quarto está ocupado. Por favor tente outro quarto")
  } else {
    if (nome.length == 0 || cpf.length == 0 || datanasc.length == 0 || entre.length == 0 || saida.length == 0) {
      window.alert("Por favor, preencha todos os campos para efetuar a reserva")
    } else {
      quartos[nquart] = nquart
      window.confirm("O Senhor(a) " + nome + " irá pagar R$: " + data * 25 + " reais pela hospedagem!")
      valor[nquart] = data * 25
      tot[nquart] = data * 25
      entradas[nquart] = entre
      cpfs[nquart] = cpf
      nomes[nquart] = nome
      saidas[nquart] = saida
      nasc[nquart] = datanasc
      prod[nquart] = 'Hospedagem '
      soma[nquart] = data * 25
      tot[nquart] = data * 25
      valorhotel = valorhotel + Number(data) * 25
      teste[nquart] = 'Hospedagem -->' + data * 25
    }
  }
}
function localizar() {
  var res2 = document.getElementById("res2")
  var localnome = document.getElementById("localnome").value
  var i = nomes.indexOf(localnome)
  res2.innerHTML = ''

  if (localnome.length == 0 || i == -1) {
    window.alert("[E R R O] O nome do hospede não é valido ou está digitado incorreto")
  } else {
    res2.innerHTML += ` NOME: ${nomes[i]} <br>`
    res2.innerHTML += ` DATA DA ENTRADA: ${entradas[i]} ----->`
    res2.innerHTML += `   DATA DA SAÍDA: ${saidas[i]} <br>`
    res2.innerHTML += ` CPF: ${cpfs[i]} ------>`
    res2.innerHTML += `   DATA DE NASCIMENTO: ${nasc[i]} <br>`
    res2.innerHTML += `Nº do quarto: ${Number(quartos[i]) + 1} <br> <br>`
  }
}
var saldo
function disponiveis() {
  res3.innerHTML = ' '
  res3.innerHTML = "QUARTOS DISPONIVEIS: "
  for (i = 0; i < 10; i++) {
    if (quartos[i] == undefined) {
      res3.innerHTML += ` ${i + 1} `
    }
  }
}
function gastos() {
  var res4 = document.getElementById("res4")
  var nomehospede = document.getElementById("nomehospede").value
  var nomegast = document.getElementById("nomegast").value
  var valorgast = document.getElementById("valorgast").value
  var i = nomes.indexOf(nomehospede)
  //verififcação de pagamento
  var pagamento2 = document.getElementsByName('pague')
  res4.innerHTML = ''
  if (nomehospede.length == 0 || nomegast.length == 0 || valorgast.length == 0 || i == -1) {
    window.alert("[E R R O] Não preencheu todos os dados no setor de ATRIBUIÇÃO DE GASTOS ou não existe hospede com esse nome cadastrado")
  } else {
    var a = Number(valorgast)
    var i = nomes.indexOf(nomehospede)

    valor[i] = valor[i] + " <br>" + valorgast
    prod[i] = prod[i] + " <br>" + nomegast
    teste[i] = teste[i] + "<br> " + nomegast + "-->" + 'R$: ' + valorgast
    soma[i] = soma[i] + a
    tot[i] = soma[i] + data

    if (pagamento2[0].checked) {
      pagou[i] = pagou[i] + a
    } else if (pagamento2[1].checked) {
      pagdesp[i] = pagdesp[i] + nomegast + "--> R$: " + valorgast + ' <BR>'
    }
  }
}

function cancelar() {
  var resultado = 0
  var cancel = document.getElementById("cancel").value
  resultado = soma[cancel - 1] - pagou[cancel - 1]
  if (cancel.length == 0 || cancel > 11 || cancel < 0) {
    window.alert("Por favor, digite o numero do quarto do hospede que irá sair")
  } else {

    if (resultado == 0) {
      window.alert(`PAGO! O Senhor ${nomes[cancel - 1]} está APTO a SAIR`)
      valor[cancel - 1] = undefined
      tot[cancel - 1] = undefined
      entradas[cancel - 1] = undefined
      cpfs[cancel - 1] = undefined
      nomes[cancel - 1] = undefined
      saidas[cancel - 1] = undefined
      nasc[cancel - 1] = undefined
      soma[cancel - 1] = undefined
      prod[cancel - 1] = undefined
      quartos[cancel - 1] = undefined
      pagou[cancel - 1] = undefined
      resultado = undefined
    } else if (resultado != 0) {
      window.alert(`[A T E N Ç Ã O] O senhor(a) ${nomes[cancel - 1]} ainda não realizou o pagamento, receba-o antes de liberar. VALOR A SER PAGO por ele(a) R$:${resultado}`)
      valor[cancel - 1] = undefined
      tot[cancel - 1] = undefined
      entradas[cancel - 1] = undefined
      cpfs[cancel - 1] = undefined
      nomes[cancel - 1] = undefined
      saidas[cancel - 1] = undefined
      nasc[cancel - 1] = undefined
      soma[cancel - 1] = undefined
      prod[cancel - 1] = undefined
      quartos[cancel - 1] = undefined
      pagou[cancel - 1] = undefined
      resultado = undefined
    }

  }

}
function vernota() {
  var res5 = document.getElementById("res5")
  var res6 = document.getElementById("res6")
  res5.innerHTML = ''
  res6.innerHTML = ''

  var nomenota = document.getElementById('nomenota').value
  var i = nomes.indexOf(nomenota)
  if (i == undefined || nomenota != nomes[i]) {
    window.alert("[E R R O]Não existe hospede cadastrado no sistema com esse nome.")
  } else {
    var natana = soma[i] - pagou[i]
    if (pagdesp[i] == " ") {
      res6.innerHTML += ` O SENHOR(A) ${nomes[i]} NÃO POSSUI DIVIDAS`
      res5.innerHTML += `NOTA DO CONSUMIDOR HOTEL- BRITO <BR>`
      res5.innerHTML += `${teste[i]}`
      res5.innerHTML += `<br> <br> <b>TOTAL: ${soma[i]}</b>`
    } else {
      res5.innerHTML += `NOTA DO CONSUMIDOR HOTEL- BRITO <BR>`
      res5.innerHTML += `${teste[i]}`
      res5.innerHTML += `<br> <br> <b>TOTAL: ${soma[i]}</b>`
      res6.innerHTML += `DESPESAS NÃO PAGAS R$<br> ${pagdesp[i]}<br> `
      res6.innerHTML += `TOTAL QUE FALTA PAGAR R$:${natana}`
    }
  }

}

