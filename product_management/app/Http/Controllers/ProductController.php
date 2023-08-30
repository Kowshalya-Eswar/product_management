<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

       $product = new Product;
        
       $product->product_name = $request['product_name'];
       $product->product_price = $request['product_price'];
       $product->product_image = $request['product_image']->store('products');
       $product->product_color = $request['product_color'];
       $product->product_description = $request['product_description'];
       $product->product_shape = $request['product_shape'];
       $product->save();
       return $product;
      // to save product locally in laravel return $request->file('filepath')->store('products');
    }

    public function list(){
        return Product::all();
    }

    public function search($key){
       return Product::where('product_name','like',"%$key%")->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = new Product;
        $product = Product::find($id);

        if($product){
            return $product;
        } else{
            return ["result"=>"product not found"];
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $data = $request->all();
       // dd($data);
        $product->update($data);
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //$result = Product::find($id)->delete();
        $result = Product::where('id',$id)->delete();
        if($result){
            return ["result"=>"product has been deleted"];
        } else{
            return ["result"=>"operation failed"];
        }

    }
}
