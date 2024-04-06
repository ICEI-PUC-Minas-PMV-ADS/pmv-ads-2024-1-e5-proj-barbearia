<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RedefineTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    //Encaminhar email com codigo de 6 digitos
    public function test_send_email_with_token()
    {
        $response = $this->post('/api/recovery/password', ['email' => 'guilermeextreme@gmail.com']);

        $response->assertSuccessful();
    }

    //Validar codigo de 6 digitos
    public function test_validate_code_received_with_success()
    {
        $response = $this->post('/api/recovery/check-token', ['email' => 'guilermeextreme@gmail.com']);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status'
        ]);
    }

    //Passando codigo de 6 digitos inválido
    public function test_validate_wrong_code()
    {
        $response = $this->post('/api/recovery/check-token', ['email' => 'guilermeextreme@gmail.com']);

        $response->assertStatus(401);
        $response->assertJsonStructure([
            'status'
        ]);
    }

    //Informando a nova senha com sucesso
    public function test_registering_new_password()
    {
        $response = $this->post('/api/recovery/new-password', [
            'email' => 'guilermeextreme@gmail.com',
            'password' => 'novasenha123',
            'password_confirmation' => 'novasenha123',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'message'
        ]);
    }

    //Informando nova senha que não coincide com a confirmação
    public function test_password_confirmation_does_not_match()
    {
        $response = $this->post('/api/recovery/new-password', [
            'email' => 'guilermeextreme@gmail.com',
            'password' => 'novasenha123',
            'password_confirmation' => 'antigasenha123',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'message'
        ]);
    }
}
