<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LoginSuccessfullyTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    //Testando login com credenciais válidas
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->post('/api/login', ['email' => 'guilermeextreme@gmail.com', 'password' => 'password123']);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'acess_token',
            'token_type'
        ]);
    }

    //Testando login com credenciais inválidas
    public function test_the_application_returns_a_error_response()
    {
        $response = $this->post('/api/login', ['email' => 'naoexiste@gmail.com', 'password' => 'senha12345']);

        $response->assertStatus(401);
    }

    //Acessando pagina que necessita de autenticação com token inválido
    public function test_trying_to_access_a_page_with_an_invalid_token()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 21|KCQDicJqgIKZ5EOJe6IpoqiTTDoD8CvlJ0000000000',
            'Accept' => 'application/json'
            ])->get('/api/manager/employee');

        $response->assertStatus(401);
    }

    //Acessando pagina que necessita de autenticação com token válido
    public function test_access_a_page_with_an_valid_token()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 21|KCQDicJqgIKZ5EOJe6IpoqiTTDoD8CvlJ82mY8mH12d21426',
            'Accept' => 'application/json'
            ])->get('/api/manager/employee');

        $response->assertStatus(200);
    }

    //Fazendo Logout
    public function test_logout()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 44|HoNVdhz1epdeUHUD9GdBEcCfphvcEvzabWYAXimk28bd6bbe',
            ])->post('/api/logout');

        $response->assertStatus(200);
    }
}
