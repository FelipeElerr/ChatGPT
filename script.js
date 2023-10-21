async function buscarEndereco() {
  const cep = document.getElementById('cepInput').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    mostrarResultado(data);
  } catch (error) {
    console.error('Erro ao buscar o endereço:', error);
  }
}

function mostrarResultado(data) {
  const resultadoDiv = document.getElementById('resultado');
  if (resultadoDiv) {
    resultadoDiv.innerHTML = `
      <p><strong>CEP:</strong> ${data.cep}</p>
      <p><strong>Logradouro:</strong> ${data.logradouro}</p>
      <p><strong>Bairro:</strong> ${data.bairro}</p>
      <p><strong>Cidade:</strong> ${data.localidade}</p>
      <p><strong>Estado:</strong> ${data.uf}</p>
    `;
  } else {
    console.error('Div de resultado não encontrada.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buscarBtn').addEventListener('click', buscarEndereco);
});
