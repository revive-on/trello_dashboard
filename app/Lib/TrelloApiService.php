<?php
/**
 * Created by PhpStorm.
 * User: Velmont
 * Date: 2018-09-02
 * Time: 오후 9:17
 */

namespace App\Lib;

use Trello\Client;
use Trello\Manager;


class TrelloApiService
{
    const BOARD_ID = 'lzHhox3G';
    /**
     * @var Client
     */
    protected $client;

    /**
     * @param string $apiKey
     * @param string $token
     * @return
     */
    public function get(string $apiKey, string $token)
    {
        $this->client = new Client();
        $this->client->authenticate($apiKey, $token, Client::AUTH_URL_CLIENT_ID);

        return $this->client->boards()->cards()->all(self::BOARD_ID);
    }

    public function filterById(string $apiKey, string $token, string $id)
    {
        $cards = $this->get($apiKey, $token);
        $filtered_cards = [];
        foreach ($cards as $card) {
            if (is_array($card['idMembers']) && in_array($id, $card['idMembers'])) {
                $filtered_cards[] = $card;
            }
        }
        return $filtered_cards;
    }
}