<?php
/**
 * Created by PhpStorm.
 * User: Velmont
 * Date: 2018-09-02
 * Time: 오후 9:16
 */

namespace App\Http\Controllers;


use App\Lib\TrelloApiService;

class TrelloController extends Controller
{
    const KEY = 'e18ab2b214b405f46f7f488a57eea6d8';
    const TOKEN = 'b40ee1cc127a10044c1888d65b42cd5afe8bcf49fcd6a2fa9f3e4624fc382b7d';
    const ID_VELMONT = '554f251ab2a66a62870dcee6';

    public function get()
    {
        $trelloApiService = new TrelloApiService();
        return $this->toJson($trelloApiService->init(self::KEY, self::TOKEN)->get());
    }

    public function filter()
    {
        $trelloApiService = new TrelloApiService();
        return $this->toJson($trelloApiService->init(self::KEY, self::TOKEN)->filterById(self::ID_VELMONT)->get());
    }
}