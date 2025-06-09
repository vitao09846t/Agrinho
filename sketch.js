let trator;
let cidade = [];
let campo;
let indoParaOCampo = false;

function setup() {
  createCanvas(800, 400);
 
  // Inicilet aliza o trator
  trator = new Trator(100, height - 150);
 
  // Criar prédios da cidade
  for (let i = 0; i < 5; i++) {
    cidade.push(new Predio(100 + i * 150, height - 100, random(50, 100), random(150, 250)));
  }

  // Campo
  campo = new Campo();
}

function draw() {
  background(135, 206, 235); // Céu azul
 
  // Desenho da cidade
  if (!indoParaOCampo) {
    for (let i = 0; i < cidade.length; i++) {
      cidade[i].mostrar();
    }
  } else {
    campo.mostrar();
  }
 
  // Movimento do trator
  trator.mover(indoParaOCampo);
  trator.mostrar();
 
  // Se o trator chegou no campo, mostrar o novo salário
  if (indoParaOCampo && trator.x > width / 2) {
    textSize(32);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Trator indo para o campo!", width / 2, 50);
  }
 
  // Transição para o campo
  if (!indoParaOCampo && trator.x > width - 150) {
    indoParaOCampo = true;
  }
}

// Classe para o trator
class Trator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidade = 2;
  }

  mover(indoParaOCampo) {
    if (!indoParaOCampo) {
      this.x += this.velocidade; // Movendo da cidade para o campo
    } else {
      if (this.x < width - 100) {
        this.x += this.velocidade; // Continuar no movimento para o campo
      }
    }
  }

  mostrar() {
    // Corpo do trator
    fill(255, 204, 0); // Corpo do trator (amarelo)
    rect(this.x, this.y - 20, 100, 40); // Corpo
    rect(this.x + 30, this.y - 40, 40, 20); // Cabine

    // Roda do trator
    fill(0); // Cor das rodas
    ellipse(this.x + 20, this.y + 20, 30, 30); // Roda dianteira
    ellipse(this.x + 80, this.y + 20, 30, 30); // Roda traseira

    // Detalhes do trator (como faróis)
    fill(255, 255, 0); // Faróis amarelos
    ellipse(this.x + 15, this.y - 10, 10, 10); // Farol esquerdo
    ellipse(this.x + 85, this.y - 10, 10, 10); // Farol direito

    // Detalhes adicionais como a chaminé
    fill(100); // Cor da chaminé
    rect(this.x + 70, this.y - 50, 10, 20); // Chaminé do trator
  }
}

// Classe para os prédios da cidade
class Predio {
  constructor(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
  }

  mostrar() {
    fill(150, 150, 150); // Cor dos prédios
    rect(this.x, this.y - this.altura, this.largura, this.altura); // Corpo do prédio
    fill(255); // Janelas
    for (let i = this.x + 5; i < this.x + this.largura; i += 30) {
      for (let j = this.y - this.altura + 5; j < this.y - 10; j += 30) {
        rect(i, j, 20, 20); // Janelas
      }
    }
  }
}

// Classe para o campo
class Campo {
  mostrar() {
    background(34, 139, 34); // Cor do fundo do campo (verde)
    fill(139, 69, 19); // Cor da terra
    rect(0, height - 100, width, 100); // Solo do campo
    fill(255, 255, 0); // Cor do sol
    ellipse(700, 50, 100, 100); // Sol
    fill(0); // Cor das árvores
    ellipse(150, height - 150, 40, 40); // Árvore 1
    ellipse(250, height - 150, 40, 40); // Árvore 2
    ellipse(350, height - 150, 40, 40); // Árvore 3
    fill(0); // Troncos das árvores
    rect(145, height - 120, 10, 40); // Tronco da árvore 1
    rect(245, height - 120, 10, 40); // Tronco da árvore 2
    rect(345, height - 120, 10, 40); // Tronco da árvore 3
  }
}

