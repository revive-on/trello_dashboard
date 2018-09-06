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
    const ID_VELMONT = "554f251ab2a66a62870dcee6";
    const BOARD_ID = 'lzHhox3G';

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBoardCard()
    {
        $trelloApiService = new TrelloApiService();
        return $this->toJson($trelloApiService->init(self::KEY, self::TOKEN)->boardCards(self::BOARD_ID)->get());
    }

    /**
     * @param string $memberName
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBoardCardFilteredById(string $memberName)
    {
        $trelloApiService = new TrelloApiService();
        $memberId = $this->getMemberId($memberName);
        $filter = array(
            "idMembers" => $memberId
        );
        $visibility = 'all';
        return $this->toJson($trelloApiService->init(self::KEY, self::TOKEN)->boardCards(self::BOARD_ID, $visibility)->filter($filter)->get());
    }

    /**
     * @param string $memberName
     * @return string
     */
    public function getMemberId(string $memberName = 'velmont'): string
    {
        $trelloApiService = new TrelloApiService();
        $memberInfo = $trelloApiService->init(self::KEY, self::TOKEN)->boardMember(self::BOARD_ID, $memberName)->get();
        return $memberInfo[0]['id'];
    }
}