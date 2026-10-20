package com.foresight.novelty

import io.ktor.client.HttpClient
import io.ktor.client.request.get

class WeatherGateway(private val client: HttpClient) {
    suspend fun pingMuxDocs(): String {
        return client.get("https://docs.mux.com/api-reference").toString()
    }
}
