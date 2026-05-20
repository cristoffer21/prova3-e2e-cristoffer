import { Page, expect } from '@playwright/test';

export default class PracticeFormPage {
  constructor(private page: Page) {}

  async preencherFormularioValido() {
    await this.page.fill('#firstName', 'Joao');
    await this.page.fill('#lastName', 'Silva');
    await this.page.fill('#userEmail', 'joao@email.com');
    await this.page.click('label[for="gender-radio-1"]');
    await this.page.fill('#userNumber', '1199999999');
    await this.page.click('#dateOfBirthInput');
    await this.page.selectOption('.react-datepicker__month-select', '4');
    await this.page.selectOption('.react-datepicker__year-select', '1995');
    await this.page.click('.react-datepicker__day--015');
    await this.page.fill('#subjectsInput', 'Maths');
    await this.page.keyboard.press('Enter');
    await this.page.check('#hobbies-checkbox-1');
    await this.page.fill('#currentAddress', 'Rua de Teste, 123');
    await this.page.click('#state');
    await this.page.click('#react-select-3-option-0');
    await this.page.click('#city');
    await this.page.click('#react-select-4-option-0');
    await this.page.click('#submit');
  }

  async preencherFormularioInvalido() {
    await this.page.click('#submit');
  }

  async validarCadastroComSucesso() {
    await expect(this.page.locator('#example-modal-sizes-title-lg'))
      .toHaveText('Thanks for submitting the form');
  }

  async validarCamposObrigatorios() {
    await expect(this.page.locator('#firstName'))
      .toHaveCSS('border-color', 'rgb(220, 53, 69)');
  }
  async preencherFormularioComTelefoneInvalido() {
  await this.page.fill('#firstName', 'Joao');
  await this.page.fill('#lastName', 'Silva');
  await this.page.click('label[for="gender-radio-1"]');
  await this.page.fill('#userNumber', '123');
  await this.page.click('#submit');
}

async validarTelefoneInvalido() {
  await expect(this.page.locator('#userNumber'))
    .toHaveCSS('border-color', 'rgb(220, 53, 69)');
 }
}