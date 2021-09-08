package com.marcelpinotti.sdvendas.repositories;

import com.marcelpinotti.sdvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SaleRepository extends JpaRepository <Sale, Long> {
}
