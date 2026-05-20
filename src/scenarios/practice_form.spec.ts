import { test } from '@playwright/test';
import PracticeFormPage from '../support/pages/PracticeFormPage';

test.describe('Cadastro - DemoQA Practice Form', () => {
  let practiceFormPage: PracticeFormPage;

  test.beforeEach(async ({ page }) => {
    practiceFormPage = new PracticeFormPage(page);
    await page.goto('https://demoqa.com/automation-practice-form');
  });

  test('Cadastrar usuário com sucesso', async () => {
    await practiceFormPage.preencherFormularioValido();
    await practiceFormPage.validarCadastroComSucesso();
  });

  test('Tentar enviar formulário vazio', async () => {
    await practiceFormPage.preencherFormularioInvalido();
    await practiceFormPage.validarCamposObrigatorios();
  });
  
  test('Não permitir cadastro com telefone inválido', async () => {
  await practiceFormPage.preencherFormularioComTelefoneInvalido();
  await practiceFormPage.validarTelefoneInvalido();
});
});