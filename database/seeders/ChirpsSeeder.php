<?php

namespace Database\Seeders;

use App\Models\Chirp;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChirpsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Chirp::factory()->count(50)->create();
    }
}
