<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function register(Request $request) {
        $product = Product::create([
            'name' => $request->name,
            'value' => $request->value,
            'units' => $request->units,
        ]);

        if($product) {
            return response()->json('Produto cadastrado com sucesso', 200);
        }

        return response()->json('Erro ao cadastrar produto', 500);
    }

    public function getProducts() {
        $products = Product::all();
        return response()->json($products);
    }

    public function deleteProduct(Request $request) {
        $product = Product::find($request->id);

        if($product) {
            $product->delete();
            return response()->json('Produto deletado com sucesso', 200);
        }

        return response()->json('Erro ao deletar produto', 500);
    }

    public function updateProduct(Request $request) {
        $product = Product::find($request->id);
        $product->update([
            'name' => $request->name,
            'value' => $request->value,
            'units' => $request->units
        ]);

        if($product) {
            return response()->json(['Registro atualizado com sucesso'], 200);
        }

        return response()->json(['Erro ao atualizar registro'], 200);
    }
}
