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
     * @var array
     */
    protected $contents;

    /**
     * @param string $apiKey
     * @param string $token
     * @return
     */
    public function init(string $apiKey, string $token): TrelloApiService
    {
        $this->client = new Client();
        $this->client->authenticate($apiKey, $token, Client::AUTH_URL_CLIENT_ID);

        $this->contents = $this->client->boards()->cards()->all(self::BOARD_ID);
        return $this;
    }

    public function filterById(string $apiKey, string $token, string $id): TrelloApiService
    {
        $cards = $this->contents;
        $filtered_cards = [];
        // TODO : fix filter pattern
        foreach ($cards as $card) {
            if (is_array($card['idMembers']) && in_array($id, $card['idMembers'])) {
                $filtered_cards[] = $card;
            }
        }
        $this->contents = $filtered_cards;
        return $this;
    }

    public function get(): array
    {
        return $this->contents;
    }
}