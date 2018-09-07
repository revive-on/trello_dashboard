<?php
/**
 * Created by PhpStorm.
 * User: Velmont
 * Date: 2018-09-02
 * Time: 오후 9:17
 */

namespace App\Service;

use Trello\Client;


class TrelloApiService
{
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
     * @return TrelloApiService
     */
    public function init(string $apiKey, string $token): TrelloApiService
    {
        $this->client = new Client();
        $this->client->authenticate($apiKey, $token, Client::AUTH_URL_CLIENT_ID);
        $this->contents = [];
        return $this;
    }

    public function boardMember(string $boardId, string $memberName)
    {
        $nameFilter = array('username' => $memberName);
        $this->contents = $this->client->boards()->members()->all($boardId);
        $this->filter($nameFilter);
        return $this;
    }

    public function boardCards(string $boardId, string $visibilityFilter = '')
    {
        $allowCustom = array(
            'customFieldItems' => 'true'
        );
        if (empty($visibilityFilter))
            $boardCards = $this->client->boards()->cards()->all($boardId, $allowCustom);
        else
            $boardCards = $this->client->boards()->cards()->filter($boardId, $visibilityFilter);
        $this->contents = $boardCards;
        return $this;
    }

    public function filter(array $filters = [])
    {
        $filteredContents = [];
        foreach ($filters as $key => $value) {
            foreach ($this->contents as $content) {
                if (is_array($content[$key])) {
                    foreach ($content[$key] as $contentValue) {
                        if ($contentValue === $value) {
                            $filteredContents[] = $content;
                        }
                    }
                } else {
                    if ($content[$key] === $value) {
                        $filteredContents[] = $content;
                    }
                }
            }
        }
        $this->contents = $filteredContents;
        return $this;
    }

    public function get(): array
    {
        return $this->contents;
    }
}