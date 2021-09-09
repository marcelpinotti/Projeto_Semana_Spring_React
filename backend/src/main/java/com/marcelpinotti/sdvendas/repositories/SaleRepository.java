package com.marcelpinotti.sdvendas.repositories;

import com.marcelpinotti.sdvendas.DTO.SaleSuccessDTO;
import com.marcelpinotti.sdvendas.DTO.SaleSumDTO;
import com.marcelpinotti.sdvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface SaleRepository extends JpaRepository <Sale, Long> {

    @Query("SELECT new com.marcelpinotti.sdvendas.DTO.SaleSumDTO(obj.seller, SUM(obj.amount)) " +
            "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSumDTO> amountGroupedBySeller();

    @Query("SELECT new com.marcelpinotti.sdvendas.DTO.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) " +
            "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSuccessDTO> successGroupedBySeller();

}
