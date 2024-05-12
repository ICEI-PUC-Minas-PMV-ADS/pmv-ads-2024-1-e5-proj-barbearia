<?php
 
namespace Tests\Feature;
 
// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
 
class ScheduleServiceTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
 
    // Listar os serviços
    public function testServicesList() {
        $response = $this->get('/api/schedule/service');
 
        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'name',
                'price'
            ]
        ]);
    }
 
    //Listar os barbeiros
    public function testEmployeeList() {
        $response = $this->get('/api/schedule/employees');
 
        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'name',
                'email',
                'surname',
                'day_off',
                'status'
            ]
        ]);
    }
 
}