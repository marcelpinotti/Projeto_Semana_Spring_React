package com.marcelpinotti.sdvendas.repositories;

import com.marcelpinotti.sdvendas.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
