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

    //Listar os horarios disponiveis
    public function testWorkloadsList() {
        $response = $this->post('/api/schedule/workload');
 
        $response->assertStatus(200);
    }
 
    //Efetuar o agendamento com sucesso
    public function testFinishSchedule() {
        $response = $this->post('/api/schedule/workload', [
            'date' => '2024-05-14',
            'email' => 'test_integracao@gmail.com',
            'employeeId' => 11,
            'hour' => 5,
            'name' => 'Joaquim',
            'serviceName' => 'Corte',
            'telephone' => '996351543'
        ]);
 
        $response->assertStatus(200);
    }
 
    //Passando parametro errado
    public function testFinishScheduleError() {
        $response = $this->post('/api/schedule/workload', [
            'date' => '',
            'email' => 'test_integracao@gmail.com',
            'employeeId' => 11,
            'hour' => 5,
            'name' => 123,
            'serviceName' => 'Corte',
            'telephone' => '99635154331231'
        ]);
 
        $response->assertStatus(200);
    }
}