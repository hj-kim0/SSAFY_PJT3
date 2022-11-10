package com.ssafy.comssa.domain.mapping;

import java.time.LocalDateTime;

public interface BoardMapping {
    Long getId();
    LocalDateTime getCreatedDate();
    String getTitle();
    String getSubtitle();
    String getUsername();
    String getMarkdown();
    String getHtml();
}
