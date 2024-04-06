<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    //Entrar em contato com a barbearia pela tela Contato
    public function test_successful_contact_the_barbershop()
    {
        $response = $this->post('/api/contact-us', [
            'name' => 'Guilherme Correa',
            'telephone' => '31996351395',
            'email' => 'Joaquim123@gmail.com',
            'message' => 'Gostaria de agradecer pelo carinho e dedicação ao realizar o corte do meu cabelo, realmente capricharam!']);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status'
        ]);
    }
}
